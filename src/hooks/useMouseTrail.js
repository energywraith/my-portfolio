import gsap from 'gsap';
import { useEffect } from 'react';

const svgns = 'http://www.w3.org/2000/svg';
const ease = 0.6;
const total = 100;
const strokeWidth = 8;

const getAlpha = (i) => (total - i) / total / 1.5;
const getColor = (i) => `rgb(255, ${(i * 50) / 100}, ${(i * 255) / 100})`;

gsap.defaults({ ease: 'none' });

const initializeMouseTrail = (root, pointer) => {
  let leader = pointer;

  // eslint-disable-next-line
  function createLine(leader, i) {
    const line = document.createElementNS(svgns, 'line');
    root.appendChild(line);

    gsap.set(line, {
      x: pointer.x,
      y: pointer.y,
      strokeWidth,
      alpha: getAlpha(i),
      stroke: getColor(i),
    });

    gsap.to(line, {
      duration: 1000,
      x: '+=1',
      y: '+=1',
      repeat: -1,
      modifiers: {
        x() {
          const posX = gsap.getProperty(line, 'x');
          const leaderX = gsap.getProperty(leader, 'x');

          const x = posX + (leaderX - posX) * ease;

          line.setAttribute('x2', leaderX - x);
          return x;
        },
        y() {
          const posY = gsap.getProperty(line, 'y');
          const leaderY = gsap.getProperty(leader, 'y');

          const y = posY + (leaderY - posY) * ease;

          line.setAttribute('y2', leaderY - y);
          return y;
        },
      },
    });

    return line;
  }

  [...new Array(total)].forEach((_element, index) => {
    leader = createLine(leader, index);
  });
};

const useMouseTrail = (rootRef) => {
  useEffect(() => {
    const root = rootRef?.current;
    if (!root) return false;

    const pointer = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    };

    initializeMouseTrail(root, pointer);

    const updatePointer = (event) => {
      pointer.x = event.clientX;
      pointer.y = event.clientY;
    };

    window.addEventListener('mousemove', updatePointer);

    return () => {
      window.removeEventListener('mousemove', updatePointer);
    };
  }, [rootRef.current]);
};

export default useMouseTrail;

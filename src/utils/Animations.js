import { keyframes } from 'styled-components';

export default {
  fadeIn: keyframes`
    from { opacity: 0; }
    to { opacity: 1; }
  `,
  fadeOut: keyframes`
    from { opacity: 1; }
    to { opacity: 0; }
  `,
  bubble: keyframes`
    from { transform: scale(0.8)}
    to { transform: scale(1) }
  `,
  loader: keyframes`
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  `,
};

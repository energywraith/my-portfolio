import ShelterJPG from 'assets/shelter-design.jpg';
import DrugieZycieJPG from 'assets/drugie-zycie-design.jpg';
import HarmoniaJPG from 'assets/harmonia-design.jpg';

const useDesigns = () => [
  {
    intlName: 'designs.harmonia',
    image: HarmoniaJPG,
    figmaLink: 'https://www.figma.com/file/RmhNGOgpAsbVAoiO3RUJGN/Harmonia?type=design&node-id=0%3A1&mode=design&t=Eo1tDYfaovf62FVe-1',
    demoLink: 'https://harmonia-orpin.vercel.app/',
  },
  {
    intlName: 'designs.foodCollection',
    image: ShelterJPG,
    figmaLink: 'https://www.figma.com/file/1i6E1yI0MNBLCEiCwh9cOq/Ulotki?type=design&node-id=22-8&mode=design&t=gxd2B765NlfmHGk6-4',
    demoLink: ShelterJPG,
  },
  {
    intlName: 'designs.drugieZycie',
    image: DrugieZycieJPG,
    figmaLink: 'https://www.figma.com/file/1i6E1yI0MNBLCEiCwh9cOq/Ulotki?type=design&node-id=22-401&mode=design&t=ClikpUqt4AiIVjwk-4',
    demoLink: DrugieZycieJPG,
  },
];

export default useDesigns;

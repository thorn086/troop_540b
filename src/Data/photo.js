

//BSA2010
import B2010003 from '../Data/clean_imgs/BSA2010/photo003.JPG';
import B2012004 from '../Data/clean_imgs/BSA2010/photo004.JPG';

//Klondike 2011
import K20110 from "../Data/clean_imgs/Klondike2011/SDC10260.JPG";
import K20111 from '../Data/clean_imgs/Klondike2011/SDC10261.JPG';
import K20112 from '../Data/clean_imgs/Klondike2011/SDC10262.JPG';

//Klondike 2012
import K20120 from '../Data/clean_imgs/Klondike2012/BSA Klondike 2012 001.JPG';
import K20121 from '../Data/clean_imgs/Klondike2012/BSA Klondike 2012 002.JPG';
//Klondike 2014
import K20140 from '../Data/clean_imgs/klondike2014/20140118_132620.jpg';

//LaFebur 2011
import L20110 from '../Data/clean_imgs/LeFeber2011/070801951640[00].jpg'

//LaFebur 2013
import L20130 from '../Data/clean_imgs/LeFeber2013/Picture 005.jpg'

export const photoData = [
    {
        title: 'Klondike',
        name: 'Klondike 2011',
        year: '2011',
        main_image: K20110,
        discription: 'Troop 540 adventures into the wilderness in this gallery of photos.  Stationed in the cabins deep in the woods, will the photos prove the boys made it out alive....',
        remaining_imgs: {
            img1: K20111,
            img2: K20112
        }
    },
    {
        title: 'Klondike',
        name: 'Klondike 2012',
        year: '2012',
        main_image: K20120,
        discription: 'Once again Troop 540 adventures back to the cabins at Klondike. This time to finish their "unfinished" business.',
        remaining_imgs: {
            img1: K20121,
            img2: '../../img/clean_imgs/Klondike 2012/BSA Klondike 2012 003.JPG',
            img3: '../../img/clean_imgs/Klondike 2012/BSA Klondike 2012 004.JPG'
        }
    },
    {
        title: 'Klondike',
        name: 'Klondike 2014',
        year: '2014',
        main_image: K20140,
        discription: 'It has been 2 years since the Troop ventured back to the Klondike. See what made them return in this sequel.',
        remaining_imgs: {
        }
    },
    {
        title: 'LaFebur',
        name: 'Lafebur 2011',
        year: '2011',
        main_image: L20110,
        discription: 'Troop 540 needed a new challenge in this coming of age gallery and their high jinks at LaFebur.',
        remaining_imgs: {
        }
    },
    {
        title: 'LaFebur',
        name: 'Lafebur 2013',
        year: '2013',
        main_image: L20130,
        discription: 'The Troop was unable to escape the calling of LaFenbur in this sequel to their last adventure',
        remaining_imgs: {
        }
    },

];

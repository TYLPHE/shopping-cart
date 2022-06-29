import adder from './images/adder.png';
import alpha from './images/alpha.png';
import amalgam from './images/amalgam.png';
import amoeba from './images/amoeba.png';
import antQueen from './images/ant-queen.png';
import bat from './images/bat.png';
import beaver from './images/beaver.png';
import bee from './images/bee.png';
import beehive from './images/beehive.png';
import blackGoat from './images/black-goat.png';
import bloodhound from './images/bloodhound.png';
import bullfrog from './images/bullfrog.png';
import cat from './images/cat.png';
import child13 from './images/child-13.png';
import cockroach from './images/cockroach.png';
import corpseMaggots from './images/corpse-maggots.png';
import coyote from './images/coyote.png';
import elk from './images/elk.png';
import elkFawn from './images/elk-fawn.png';
import fieldMice from './images/field-mice.png';
import geck from './images/geck.png';
import greatWhite from './images/great-white.png';
import grizzly from './images/grizzly.png';
import kingfisher from './images/kingfisher.png';
import longElk from './images/long-elk.png';
import magpie from './images/magpie.png';
import mantis from './images/mantis.png';
import mantisGod from './images/mantis-god.png';
import mole from './images/mole.png';
import moleMan from './images/mole-man.png';
import mooseBuck from './images/moose-buck.png';
import opossum from './images/opossum.png';
import ouroboros from './images/ouroboros.png';
import packRat from './images/pack-rat.png';
import porcupine from './images/porcupine.png';
import pronghorn from './images/pronghorn.png';
import ratKing from './images/rat-king.png';
import rattler from './images/rattler.png';
import raven from './images/raven.png';
import ravenEgg from './images/raven-egg.png';
import ringWorm from './images/ring-worm.png';
import riverOtter from './images/river-otter.png';
import riverSnapper from './images/river-snapper.png';
import skink from './images/skink.png';
import skunk from './images/skunk.png';
import sparrow from './images/sparrow.png';
import squirrel from './images/squirrel.png';
import stinkbug from './images/stinkbug.png';
import stoat from './images/stoat.png';
import strangeLarva from './images/strange-larva.png';
import stuntedWolf from './images/stunted-wolf.png';
import theDaus from './images/the-daus.png';
import turkeyVulture from './images/turkey-vulture.png';
import urayuli from './images/urayuli.png';
import warren from './images/warren.png';
import wolf from './images/wolf.png';
import wolfCub from './images/wolf-cub.png';
import workerAnt from './images/worker-ant.png';

const inventory = [
  // A
  {
    name: 'Adder',
    desc: 'The caustic Adder. Damage from its poison bite is always lethal.',
    tribe: 'Reptile',
    teeth: 4,
    health: 1,
    power: 1,
    cost: 2,
    type: 'blood',
    img: adder,
    display: true,
  },
  {
    name: 'Alpha',
    desc: 'The venerable Alpha. Its courage emboldens the creatures that stand beside it.',
    tribe: 'Canine',
    teeth: 3,
    health: 2,
    power: 1,
    cost: 5,
    type: 'bone',
    img: alpha,
    display: true,
  },
  {
    name: 'Amalgam', 
    desc: 'Canine. Hooved. Reptilian. Feathered. Insectoid. The Amalgam is all.',
    tribe: 'Misc',
    teeth: 5,
    health: 3,
    power: 3,
    cost: 2,
    type: 'blood',
    img: amalgam,
    display: true,
  },
  {
    name: 'Amoeba',
    desc: 'The amorphous Amoeba. Its sigils are ever changing.',
    tribe: 'Misc',
    teeth: 5,
    health: 2,
    power: 1,
    cost: 2,
    type: 'bone',
    img: amoeba,
    display: true,
  },
  {
    name: 'Ant Queen',
    desc: 'The Regal Ant Queen. She births a new Ant once played.',
    tribe: 'Insect',
    teeth: 3,
    health: 3,
    power: 'Ant',
    cost: 2,
    type: 'blood',
    img: antQueen,
    display: true,
  },

  // B
  {
    name: 'Bat',
    desc: 'The meddlesome Bat. A minor terror.',
    tribe: 'Misc',
    teeth: 3,
    health: 1,
    power: 2,
    cost: 4,
    type: 'bone',
    img: bat,
    display: true,
  },
  {
    name: 'Beaver',
    desc: 'The industrious Beaver. When played it constructs Dams adjacent to it.',
    tribe: 'Misc',
    teeth: 2,
    health: 3,
    power: 1,
    cost: 2,
    type: 'blood',
    img: beaver,
    display: true,
  },
  {
    name: 'Bee',
    desc: 'The bee.',
    tribe: 'Insect',
    teeth: 0,
    health: 1,
    power: 1,
    cost: 0,
    type: '',
    img: bee,
    display: true,
  },
  {
    name: 'Beehive',
    desc: 'The inviolable Beehive. When it is attacked, you will draw a Bee.',
    tribe: 'Insect',
    teeth: 1,
    health: 2,
    power: 0,
    cost: 1,
    type: 'blood',
    img: beehive,
    display: true,
  },
  {
    name: 'Black Goat',
    desc: 'The apotheosized Goat. The truest offering. Sacrificing it grants three blood.',
    tribe: 'Hooved',
    teeth: 5,
    health: 1,
    power: 0,
    cost: 1,
    type: 'blood',
    img: blackGoat,
    display: true,
  },
  {
    name: 'Bloodhound',
    desc: 'The dauntless bloodhound. It leaps to oppose new creatures when they are played.',
    tribe: 'Canine',
    teeth: '2',
    health: 3,
    power: 2,
    cost: 2,
    type: 'blood',
    img: bloodhound,
    display: true,
  },
  {
    name: 'Bullfrog',
    desc: 'The watchful Bullfrog. It leaps in the way of attacking flyers.',
    tribe: 'Reptile',
    teeth: 3,
    health: 2,
    power: 1,
    cost: 1,
    type: 'blood',
    img: bullfrog,
    display: true,
  },

  // C
  {
    name: 'Cat',
    desc: 'The undying Cat. Sacrificing the poor beast does not kill it.',
    tribe: 'Misc',
    teeth: 3,
    health: 1,
    power: 0,
    cost: 1,
    type: 'blood',
    img: cat,
    display: true,
  },
  {
    name: 'Child 13',
    desc: 'Poor abandoned child. It does not die when sacrificed... but do you have the heart to try?',
    tribe: 'Hooved',
    teeth: 6,
    health: 1,
    power: 0,
    cost: 1,
    type: 'blood',
    img: child13,
    display: true,
  },
  {
    name: 'Cockroach',
    desc: 'The unkillable Cockroach. It returns to your hand after dying',
    tribe: 'Insect',
    teeth: 4,
    health: 1,
    power: 1,
    cost: 4,
    type: 'bone',
    img: cockroach,
    display: true,
  },
  {
    name: 'Corpse Maggots',
    desc: 'The inevitable Maggot. They will lurch forth from your hand when your creatures are killed.',
    tribe: 'Insect',
    teeth: 4,
    health: 2, 
    power: 1,
    cost: 5,
    type: 'bone',
    img: corpseMaggots,
    display: true,
  },
  {
    name: 'Coyote',
    desc: 'The meager Coyote. But what did you expect for only four bones?',
    tribe: 'Canine',
    teeth: 3,
    health: 1,
    power: 2,
    cost: 4,
    type: 'bone',
    img: coyote,
    display: true,
  },
  // D

  // E
  {
    name: 'Elk',
    desc: 'The flighty Elk. It moves after attacking.',
    tribe: 'Hooved',
    teeth: 2,
    health: 4,
    power: 2,
    cost: 2,
    type: 'blood',
    img: elk,
    display: true,
  },
  {
    name: 'Elk Fawn',
    desc: 'The nascent Fawn. It quickly grows into an elk.',
    tribe: 'Hooved',
    teeth: 4,
    health: 1,
    power: 1,
    cost: 1,
    type: 'blood',
    img: elkFawn,
    display: true,
  },

  // F
  {
    name: 'Field Mice',
    desc: 'Hm. The licentious Field Mice. You will draw a copy when they are played.',
    tribe: 'Misc',
    teeth: 7,
    health: 2,
    power: 2,
    cost: 2,
    type: 'blood',
    img: fieldMice,
    display: true,
  },

  // G
  {
    name: 'Geck',
    desc: 'The uninspiring Geck. Perhaps you can find a use for it?',
    tribe: 'Reptile',
    teeth: 6,
    health: 1,
    power: 1,
    cost: 0,
    type: '',
    img: geck,
    display: true,
  },
  {
    name: 'Great White',
    desc: 'The tyrannical Great White. The master of the deep.',
    tribe: 'Misc',
    teeth: 4,
    health: 2,
    power: 4,
    cost: 3,
    type: 'blood',
    img: greatWhite,
    display: true,
  },
  {
    name: 'Grizzly',
    desc: 'The monstrous Grizzly. Its form speaks enough of its efficacy.',
    tribe: 'Misc',
    teeth: 4,
    health: 6,
    power: 4,
    cost: 3,
    type: 'blood',
    img: grizzly,
    display: true,
  },

  // H

  // I

  // J

  // K
  {
    name: 'Kingfisher',
    desc: 'The adept Kingfisher. A slippery hunter.',
    tribe: 'Avian',
    teeth: 3,
    health: 1,
    power: 1,
    cost: 1,
    type: 'blood',
    img: kingfisher,
    display: true,
  },

  // L
  {
    name: 'Long Elk',
    desc: 'I have no words for this freak of nature.',
    tribe: 'Hooved',
    teeth: 5,
    health: 2,
    power: 1,
    cost: 4,
    type: 'bone',
    img: longElk,
    display: true,
  },

  // M
  {
    name: 'Magpie',
    desc: 'The covetous Magpie. It can fetch any card in your deck.',
    tribe: 'Avian',
    teeth: 4,
    health: 1,
    power: 1,
    cost: 2,
    type: 'blood',
    img: magpie,
    display: true,
  },
  {
    name: 'Mantis',
    desc: 'The fervid Mantis. Its prying claws strike both to the left and right',
    tribe: 'Insect',
    teeth: 5,
    health: 1,
    power: 1,
    cost: 1,
    type: 'blood',
    img: mantis,
    display: true,
  },
  {
    name: 'Mantis God',
    desc: 'The holy Mantis God. A perfect incarnation of terror.',
    tribe: 'Insect',
    teeth: 6,
    health: 1,
    power: 1,
    cost: 1,
    type: 'blood',
    img: mantisGod,
    display: true,
  },
  {
    name: 'Mole',
    desc: 'The omnipresent mole. It burrows and emerges to block any landborne attacker.',
    tribe: 'Misc',
    teeth: 3,
    health: 4,
    power: 0,
    cost: 1,
    type: 'blood',
    img: mole,
    display: true,
  },
  {
    name: 'Mole Man',
    desc: 'The stalwart Mole Man. The ultimate defense.',
    tribe: 'Misc',
    teeth: 5,
    health: 6,
    power: 0,
    cost: 1,
    type: 'blood',
    img: moleMan,
    display: true,
  },
  {
    name: 'Moose Buck',
    desc: 'The regal moose buck. Creatures of the wild make way for it.',
    tribe: 'Hooved',
    teeth: 5,
    health: 7,
    power: 3,
    cost: 3,
    type: 'blood',
    img: mooseBuck,
    display: true,
  },

  // N

  // O
  {
    name: 'Opossum',
    desc: 'The resourceful Opossum. A small creature for a small price.',
    tribe: 'Misc',
    teeth: 3,
    health: 1, 
    power: 1,
    cost: 2,
    type: 'bone',
    img: opossum,
    display: true,
  },
  {
    name: 'Ouroboros',
    desc: 'The eternal serpent. Death strengthens it forever.',
    tribe: 'Reptile',
    teeth: 7,
    health: 1,
    power: 1,
    cost: 2, 
    type: 'blood',
    img: ouroboros,
    display: true,
  },

  // P
  {
    name: 'Pack Rat',
    desc: 'The prudent Pack Rat. Never doubt the utility of a well stocked pack.',
    tribe: 'Misc',
    teeth: 4,
    health: 2,
    power: 2,
    cost: 2,
    type: 'blood',
    img: packRat,
    display: true,
  },
  {
    name: 'Porcupine',
    desc: 'The ornery Porcupine. Sharp quills await those who dare attack it.',
    tribe: 'Misc',
    teeth: 4,
    health: 2,
    power: 1,
    cost: 1,
    type: 'blood',
    img: porcupine,
    display: true,
  },
  {
    name: 'Pronghorn',
    desc: 'The sadistic Pronghorn. Woe be to those that meet the end of its antlers.',
    tribe: 'Hooved',
    teeth: 2,
    health: 3,
    power: 1,
    cost: 2,
    type: 'blood',
    img: pronghorn,
    display: true,
  },

  // Q

  // R
  {
    name: 'Rat King',
    desc: 'The tragic Rat King. When their tangled bodies become corpses you will gain four bones.',
    tribe: 'Misc',
    teeth: 2,
    health: 1,
    power: 2,
    cost: 2,
    type: 'blood',
    img: ratKing,
    display: true,
  },
  {
    name: 'Rattler',
    desc: 'The nefarious Rattler. A brittle creature... once past its monstrous fangs.',
    tribe: 'Reptile',
    teeth: 5,
    health: 1,
    power: 3,
    cost: 6,
    type: 'bone',
    img: rattler,
    display: true,
  },
  {
    name: 'Raven',
    desc: 'The conniving Raven. A blight upon the skies.',
    tribe: 'Avian',
    teeth: 4,
    health: 3,
    power: 2,
    cost: 2,
    type: 'blood',
    img: raven,
    display: true,
  },
  {
    name: 'Raven Egg',
    desc: 'A Nascent Raven. It is no less conniving in its incubation.',
    tribe: 'Avian',
    teeth: 3,
    health: 2,
    power: 0,
    cost: 1,
    type: 'blood',
    img: ravenEgg,
    display: true,
  },
  {
    name: 'Ring Worm',
    desc: 'The underappreciated Ring Worm. Its value is not readily apparent.',
    tribe: 'Insect',
    teeth: 0,
    health: '1',
    power: 0,
    cost: 1,
    type: 'blood',
    img: ringWorm,
    display: true,
  },
  {
    name: 'River Otter',
    desc: 'An, the Elusive Otter. It submerges itself during my turn.',
    tribe: 'Misc',
    teeth: 2,
    health: 1,
    power: 1,
    cost: 1,
    type: 'blood',
    img: riverOtter,
    display: true,
  },
  {
    name: 'River Snapper',
    desc: 'The stalwart Snapper. A near impenetrable defense.',
    tribe: 'Reptile',
    teeth: 3,
    health: 6,
    power: 1,
    cost: 2,
    type: 'blood',
    img: riverSnapper,
    display: true,
  },
  
  // S
  {
    name: 'Skink',
    desc: 'The Tenacious Skink. It moves over when attacked, leaving its tail behind.',
    tribe: 'Reptile',
    teeth: 5,
    health: 2, 
    power: 1,
    cost: 1,
    type: 'Reptile',
    img: skink,
    display: true,
  },
  {
    name: 'Skunk',
    desc: 'The Reviled Skunk. Its stench reduces the strength of the enemy.',
    tribe: 'Misc',
    teeth: 3,
    health: 3,
    power: 0,
    cost: 1,
    type: 'blood',
    img: skunk,
    display: true,
  },
  {
    name: 'Sparrow',
    desc: 'The Meek Sparrow. An inexpensive, if feeble, flying creature.',
    tribe: 'Avian',
    teeth: 3,
    health: 2,
    power: 1,
    cost: 1,
    type: 'blood',
    img: sparrow,
    display: true,
  },
  {
    name: 'Squirrel',
    desc: 'The squirrel.',
    tribe: 'Misc',
    teeth: 0,
    health: 1,
    power: 0,
    cost: 0,
    type: '',
    img: squirrel,
    display: true,
  },
  {
    name: 'Stinkbug',
    desc: 'I wasn\'t sure if I would ever escape that Iron Crypt...',
    tribe: 'Insect',
    teeth: 3,
    health: 2,
    power: 1,
    cost: 2,
    type: 'bone',
    img: stinkbug,
    display: true,
  },
  {
    name: 'Stoat',
    desc: 'Total misplay.',
    tribe: 'Misc',
    teeth: 4,
    health: 3, 
    power: 1,
    cost: 1,
    type: 'blood',
    img: stoat,
    display: true,
  },
  {
    name: 'Strange Larva',
    desc: 'A largely unimpressive specimen.',
    tribe: 'Insect',
    teeth: 7,
    health: 3,
    power: 0,
    cost: 1,
    type: 'blood',
    img: strangeLarva,
    display: true,
  },
  {
    name: 'Stunted Wolf',
    desc: 'Take the film roll. Before he sees it! NOW!',
    tribe: 'Canine',
    teeth: 5,
    health: 2,
    power: 2, 
    cost: 1,
    type: 'blood',
    img: stuntedWolf,
    display: true,
  },

  // T
  {
    name: 'The Daus',
    desc: 'That filthy feral hog... it becomes incensed when its chimes are struck.',
    tribe: 'Misc',
    teeth: 3,
    health: 2,
    power: 2,
    cost: 2,
    type: 'blood',
    img: theDaus,
    display: true,
  },
  {
    name: 'Turkey Vulture',
    desc: 'The pernicious Vulture. A tyrant of the skies.',
    tribe: 'Avian',
    teeth: 4,
    health: 3,
    power: 3,
    cost: 8,
    type: 'bone',
    img: turkeyVulture,
    display: true,
  },

  // U
  {
    name: 'Urayuli',
    desc: 'The level of brutish strength needs no explanation.',
    tribe: 'Misc',
    teeth: 5,
    health: 7,
    power: 7,
    cost: 4,
    type: 'blood',
    img: urayuli,
    display: true,
  },

  // V

  // W
  {
    name: 'Warren',
    desc: 'The bountiful Warren. It spawns a rabbit when it is placed.',
    tribe: 'Misc',
    teeth: 3,
    health: 2,
    power: 0,
    cost: 1,
    type: 'blood',
    img: warren,
    display: true,
  },
  {
    name: 'Wolf',
    desc: 'The proud Wolf. A vicious contender.',
    tribe: 'Canine',
    teeth: 4,
    health: 2,
    power: 3,
    cost: 2,
    type: 'blood',
    img: wolf,
    display: true,
  },
  {
    name: 'Wolf Cub',
    desc: 'The young Wolf Cub. It grows into a Wolf after a single turn.',
    tribe: 'Canine',
    teeth: 5,
    health: 1,
    power: 1,
    cost: 1,
    type: 'blood',
    img: wolfCub,
    display: true,
  },
  {
    name: 'Worker Ant',
    desc: 'Ah, the diligent Ant. Its strength is proportionate to the size of its colony',
    tribe: 'Insect',
    teeth: 2,
    health: 2,
    power: 'Ant',
    cost: 1,
    type: 'blood',
    img: workerAnt,
    display: true,
  },
];

export default inventory;

import kingfisher from './images/kingfisher.png';
import ravenEgg from './images/ravenEgg.png';
import sparrow from './images/sparrow.png';
import magpie from './images/magpie.png';
import raven from './images/raven.png';
import turkeyVulture from './images/turkeyVulture.png';
import stuntedWolf from './images/stuntedWolf.png';
import wolfCub from './images/wolfCub.png';
import bloodhound from './images/bloodhound.png';
import wolf from './images/wolf.png';
import coyote from './images/coyote.png';
import alpha from './images/alpha.png';
import child13 from './images/child13.png';
import longElk from './images/longElk.png';
import blackGoat from './images/blackGoat.png';
import elkFawn from './images/elkFawn.png';
import elk from './images/elk.png';
import pronghorn from './images/Pronghorn.png';
import mooseBuck from './images/mooseBuck.png';
import mantisGod from './images/mantisGod.png';
import strangeLarva from './images/strangeLarva.png';
import bee from './images/bee.png';
import beehive from './images/beehive.png';
import mantis from './images/mantis.png';
import ringWorm from './images/ringWorm.png';
import workerAnt from './images/workerAnt.png';
import antQueen from './images/antQueen.png';
import stinkbug from './images/stinkbug.png';
import cockroach from './images/cockroach.png';
import corpseMaggots from './images/corpseMaggots.png';
import geck from './images/geck.png';
import ouroboros from './images/ouroboros.png';
import bullfrog from './images/bullfrog.png';
import skink from './images/skink.png';
import adder from './images/adder.png';
import riverSnapper from './images/riverSnapper.png';
import rattler from './images/rattler.png';
import moleMan from './images/moleMan.png';
import Amalgam from './images/Amalgam.png';
import packRat from './images/packRat.png';
import theDaus from './images/theDaus.png';
import urayuli from './images/urayuli.png';
import amoeba from './images/amoeba.png';
import squirrel from './images/squirrel.png';
import cat from './images/cat.png';
import mole from './images/mole.png';
import porcupine from './images/porcupine.png';
import riverOtter from './images/riverOtter.png';
import skunk from './images/skunk.png';
import stoat from './images/stoat.png';
import warren from './images/warren.png';
import beaver from './images/beaver.png';
import fieldMice from './images/fieldMice.png';
import ratKing from './images/ratKing.png';
import bat from './images/bat.png';
import opossum from './images/opossum.png';
import grizzly from './images/grizzly.png';
import greatWhite from './images/greatWhite.png';

const inventory = [
  // avian
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
  },
  {
    name: 'Raven Egg',
    desc: 'A Nascent Raven. It is no less connivin in its incubation.',
    tribe: 'Avian',
    teeth: 3,
    health: 2,
    power: 0,
    cost: 1,
    type: 'blood',
    img: ravenEgg,
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
  },
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
  },

  // Canine
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
  },
  // Hooved
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
  },
  {
    name: 'Long Elk',
    desc: 'I have no words for this freak of nature',
    tribe: 'Hooved',
    teeth: 5,
    health: 2,
    power: 1,
    cost: 4,
    type: 'bone',
    img: longElk,
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
  },
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
  },
  // Insect
  {
    name: 'Mantis God',
    desc: 'The holy Mantis God. A perfect incarnation of terror',
    tribe: 'Insect',
    teeth: 6,
    health: 1,
    power: 1,
    cost: 1,
    type: 'blood',
    img: mantisGod,
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
  },
  {
    name: 'Bee',
    desc: 'A bee.',
    tribe: 'Insect',
    teeth: 0,
    health: 1,
    power: 1,
    cost: 0,
    type: '',
    img: bee,
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
  },

  // Reptile
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
  },
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
  },
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
  },
  // Miscellaneous
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
    img: Amalgam,
  },
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
  },
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
  },
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
  },
  {
    name: 'Squirrel',
    desc: 'The squirrel',
    tribe: 'Misc',
    teeth: 0,
    health: 1,
    power: 0,
    cost: 0,
    type: '',
    img: squirrel,
  },
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
  },
  {
    name: 'Warren',
    desc: 'The bountiful Warren. It spawns a rabbit when it is placed',
    tribe: 'Misc',
    teeth: 3,
    health: 2,
    power: 0,
    cost: 1,
    type: 'blood',
    img: warren,
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
  },
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
  },
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
  },
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
  },
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
  },
];

export default inventory;
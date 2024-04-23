import netila from './images/avatars/netila.jpg'
import girl from './images/avatars/girl.jpg'
import suifti from './images/avatars/suifti.jpg'
import medtech from './images/avatars/medtech.jpg'
import thanatos from './images/avatars/thanatos.png'
import trix from './images/avatars/trix.jpg'
import klam from './images/avatars/klam.jpg'
import azzuel from './images/avatars/azzuel.jpg'


export const personnages = [
    {
      id: 3,
      name: 'Sonia',
      fullname: 'Sonia Forsakere',
      imageUrl: netila,
      role: 'Medtech',
      age: '28',
      origin: 'Scandinavie',
      description: `Sonia, issue d'une famille renommée en implantation d'implants médicaux, développe un talent précoce pour la médecine cybertechnique. Après un traumatisme, elle se tourne vers des expérimentations clandestines à l'école, mais est rapidement découverte par les autorités. Ses parents l'envoient alors à NightCity pour se cacher.

      À NightCity, elle trouve des petits boulots réparant des implants et récupérant ceux des cadavres. Son obsession pour les implants l'amène à découvrir « Vampyres », un implant interne, qu'elle utilise pour ouvrir sa propre clinique clandestine. Cependant, son désir de contrôle la pousse à se nourrir de ses patients, la transformant en une victime de sa propre folie.`,
      player: 'Netila',
    },
    {
      id: 4,
      name: 'Ghost',
      fullname: 'GHOST',
      imageUrl: suifti,
      role : 'Solo',
      age: '39',
      origin: 'Europe',
      description: `Simon "Ghost" Riley est un solo originaire d'un quartier gangréné, avec des racines européennes. Son visage porte une cicatrice qu'il dissimule souvent sous une capuche, témoignage d'un passé douloureux. Ancien agent de la MaxTac, il a tragiquement perdu sa femme et sa fille dans un drame familial, alimentant sa quête de vengeance. Convaincu que la seule personne digne de confiance est soi-même, il fréquente parfois des prostituées pour échapper à la douleur qui le consume. Avec un sang-froid et une agressivité notables, il affirme que dans ce monde corrompu, la seule personne en qui l'on peut réellement avoir confiance, c'est soi-même.`,
      player: 'Swifty',
    },
    {
      id: 5,
      name: 'J.',
      fullname: 'Jay Gemini',
      imageUrl: thanatos,
      role : 'Corpo',
      age: '28',
      origin: 'Europe',
      description: `Jay Gemini, surnommé "J.", a grandi dans la petite couronne avec ses parents, techniciens de corpo. Après leur maladie, il a vécu chez un ami et s'est déterminé à réussir chez les corpos pour éviter d'autres drames. Talentueux homme d'affaires, il a réussi à intégrer une corporation et excelle dans le maniement des armes à feu légères. Il porte un tatouage et une photo de famille sous ses chemises. Ses seules relations proches sont son amie d'enfance et les parents de celle-ci. Malgré une ancienne relation, c'est vers son amie d'enfance qu'il garde une affection particulière.`,
      player: 'Thanatos',
    },
    {
      id: 6,
      name: 'Trix',
      fullname: 'Trix Liu',
      imageUrl: trix,
      role : 'Fixer',
      age: '34',
      origin: 'Asie du sud est',
      description: `Trix est une fixer originaire d'Asie du Sud-Est qui traine vers l'upper Marina. Son style urbain est flamboyant et tape-à-l'œil. Arrogante et distante, elle n'hésite pas à manipuler pour obtenir ce qu'elle veut. Pour elle, l'argent est roi, et elle est prête à tout pour en accumuler.
      Sa bague en émeraude n'est pas seulement un symbole de réussite, mais aussi un avertissement de sa dangerosité. Ses ex-amants, tous impliqués dans des situations périlleuses, en témoignent. Chaque choix qu'elle fait est calculé pour la puissance et la richesse. Derrière son apparence séduisante se cache une ambition féroce et une capacité à éliminer ceux qui se mettent en travers de son chemin.`,
      player: 'Freyja',
    },
    {
      id: 7,
      name: 'Corentin',
      fullname: 'Corentin Shiny',
      imageUrl: klam,
      role : 'Techie',
      age: '14',
      origin: '???',
      description: `???`,
      player: 'Klam',
    },
    {
      id: 8,
      name: 'Korvold',
      fullname: 'Korvold Wisnutan',
      imageUrl: azzuel,
      role : 'Medtech',
      age: '45',
      origin: 'Japon',
      description: `Né dans une grande précarité, il est vendu à un gang par ses parents endettés. À 10 ans, lors d'une fusillade, il sauve le chef du gang en dépit de sa blessure par balle et de ses implants endommagés. Malgré son jeune âge, il parvient à le soigner avec les moyens du bord. En gratitude, le chef l'adopte et finance ses études de médecine, le poussant à devenir un médtech talentueux, mais principalement au service du gang.

      Il voue une loyauté sans faille au chef du gang. Malgré ses efforts pour contrecarrer une tentative d'assassinat contre ce dernier, il échoue et voit son frère adoptif mourir entre ses bras. Trahi par son gang, désormais aux mains de ses adversaires, il fuit en emportant le strict nécessaire. Tenté de quitter définitivement Night City, il choisit plutôt de plonger dans les bas-fonds, conscient que son ennemi ne le laissera jamais en paix et qu'il devra le vaincre pour assurer sa survie.`,
      player: 'Azzuel',
      imagePosition : 'top'
    },
    
    // Add more characters as needed
  ];
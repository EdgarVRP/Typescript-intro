let skills: string[]=['Bash','Counter','Healing'];

interface Character {
    name: string;
    hp: number;
    skills: string[];
    hometown?: string; // Optional
    city?: string; // Optional
}
const strider: Character = {
    name: 'Strider',
    hp: 100,
    skills: ['Bash','Counter','Healing']
}

strider.hometown = 'Gondor';

console.table(strider);
export {};
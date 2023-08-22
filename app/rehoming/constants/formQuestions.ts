
export const initialFormData = {
    name: '',
    type: '',
    breed: '',
    color: '',
    gender: '',
    age: '',
    toilet_trained: '',
    medical_condition: '',
    reason: '',
    characteristics: '',
    vaccination: '',
    terms: false,
  };
  
//  export const formSections = [
//     'Basic Pet Information', 'Health & Training', 'Personality', 'Reasons for Rehoming'
// ];

export const formSections = [
    {
        section: 'A',
        section_title: 'Basic Pet Information',
    },
    {
        section: 'B',
        section_title: 'Health & Training',
    },
    {
        section: 'C',
        section_title: 'Personality',
    },
    {
        section: 'D',
        section_title: 'Reasons for Rehoming',
    },
]

export const pet_traits = [
    'Children Friendly',
    'House-trained',
    'Can live with other pets',
    'Good with Commands',
    'Separation Anxiety',
    'Knows Tricks',
    'Indoor preference',
    'Energetic',
]
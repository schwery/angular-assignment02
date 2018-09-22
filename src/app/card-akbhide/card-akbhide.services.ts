import { Student } from './../student';
export class CardAkbhideServices {
 
  getDetails(){
    let akbhide: Student = {
          ulid: 'akbhide',
          name: 'Anagha Bhide',
          desc_short: 'I am passionate about Web Development',
          desc_long: 'I am a graduate student at ISU and I love coding. ' +
                      'I have 4 years of experience working in Java and now' +
                      ' I also want to indulge in upcoming technologies.',
          major: 'Internet Application Development',
          platform: 'Java, Angular, Oracle',
          hometown: 'Nagpur, India',
          hobbies: 'Crafting',
          inspiration: 'Allen Turing',
          website: 'https://www.hackerrank.com/',
          school: 'Illinois State University'
        };

        return akbhide;
    }
    }
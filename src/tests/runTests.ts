import Jasmine from 'jasmine';

const jasmine = new Jasmine();

jasmine.loadConfig({
  // غيرنا المسار ليبدأ من src ويشمل كل شي جواها
  spec_dir: 'src', 
  spec_files: [
    '**/*[sS]pec.ts' 
  ],
  helpers: [
    'tests/helpers/**/*.ts'
  ],
  random: false
});

jasmine.execute();
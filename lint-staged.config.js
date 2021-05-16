// Lucas: Entendi que essa lib verifica apenas os arquivos modificados e não o código inteiro quando faz commit
module.exports = {
  // Run type-check on changes to TypeScript files
  '**/*.ts?(x)': () => 'yarn type-check',
  // Run ESLint on changes to JavaScript/TypeScript files
  '**/*.(ts|js)?(x)': (filenames) => `yarn lint ${filenames.join(' ')}`,
}

module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'prettier', // eslint と prettier の設定が競合する場合、prettierを優先する
    // 'plugin:prettier/recommended', // 特にPrettierの設定にもこだわりがなければ、ここでrecommendedを設定して、rulus内で上書きするものあり
    'prettier/@typescript-eslint', // @typescript-elint と prettier の設定が競合する場合、prettierを優先する
  ],
  parserOptions: {
    ecmaVersion: 2019, // 年次ベースのほうがわかりやすいと思うので。10などのようにバージョンベースでも書ける。
    sourceType: 'module', // こうすることで `import` を使えるようにする
    ecmaFeatures: {
      impliedStrict: true, // ソースコードを常にstrict modeとして扱う
    },
    project: './tsconfig.json',
  },
  env: {
    browser: true, // plugin の compat 使うなら必須
    node: true, // node のグローバル変数や特有ルールを有効にする
    commonjs: true, // common js を有効にする
    jest: true,
    serviceworker: true,
  },
  plugins: [
    // rulesでpluginのルールを上書きしたい（recommendedから上書きしたい場合）は、ここに明記する必要がある
    '@typescript-eslint',
    'prettier',
  ],
  rules: {
    'linebreak-style': 'off', // これが正しいかはわからない。要検討の必要
    'import/no-extraneous-dependencies': 'off', // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md
    'import/no-useless-path-segments': 'off', // 便利だが、eslint の auto-fix を有効にしている関係上、これをオンにしていると `import some from './'` と書いた時点で auto-fix が走ってしまい、面倒なことになる
    'prettier/prettier': ['off', {}, { userprettierrc: true }], // スタイルに関する問題は画面上でエラーと見せなくてよい。整形時に勝手に直すだけでよい
  },
  settings: {
    node: { extensions: ['.js', '.ts'] }, // 本当は parser が解釈対象を追加してくれるはずだが、これに関しては機能していないので、追記する
  },
  overrides: [
    {
      files: ['**/*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off', // jsにもなぜか効いてしまうので、offにする https://github.com/Shopify/eslint-plugin-shopify/issues/159
      },
    },
  ],
};

// デフォルトで指定されているものも、必要なやつは明示しておきたいので入れている

module.exports = {
  printWidth: 120, // これより長い文字数分あると自動で改行される
  tabWidth: 2, // タブがスペース２個分にあたる
  useTabs: false, // スペースの代わりにタブを使わない
  semi: true, // セミコロンを付ける
  singleQuote: true, // ダブルクオートをシングルクオートにする（エスケープとかその辺は上手い具合に調整してくれる
  jsxSingleQuote: true, // 上記のjsxバージョン
  trailingComma: 'es5', // https://prettier.io/docs/en/options.html#trailing-commas
  bracketSpacing: true, // true の場合 `{ foo: bar }`、false の場合 `{foo:bar}`
  jsxBracketSameLine: true, // 閉じ括弧`>`をワンラインにするか、別にするか https://prettier.io/docs/en/options.html#jsx-brackets
  arrowParens: 'avoid', // avoid の場合 `const func = x => {}`、always の場合 `const func = (x) => {}`
  endOfLine: 'auto', // 改行コードについて適切な解決策は見つかっていない https://prettier.io/docs/en/options.html#end-of-line
};

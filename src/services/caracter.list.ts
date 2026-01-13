type Caracter = {
    hiragana: string;
    katakana: string;
};

export const caracterList = [
    ['a', 'i', 'u', 'e', 'o'],
    ['ka', 'ki', 'ku', 'ke', 'ko'],
    ['sa', 'shi', 'su', 'se', 'so'],
    ['ta', 'chi', 'tsu', 'te', 'to'],
    ['na', 'ni', 'nu', 'ne', 'no'],
    ['ha', 'hi', 'fu', 'he', 'ho'],
    ['ma', 'mi', 'mu', 'me', 'mo'],

    ['ya', 'yu', 'yo'],
    ['ra', 'ri', 'ru', 're', 'ro'],
    ['wa', 'wo', 'n'],

    //tenten " e maru °
    ['ga', 'gi', 'gu', 'ge', 'go'],
    ['za', 'ji', 'zu', 'ze', 'zo'],
    ['da', 'ji2', 'zu2', 'de', 'do'],
    ['ba', 'bi', 'bu', 'be', 'bo'],
    ['pa', 'pi', 'pu', 'pe', 'po'],

    // Chiisai
    ['kya', 'kyu', 'kyo'],
    ['sha', 'shu', 'sho'],
    ['cha', 'chu', 'cho'],
    ['nya', 'nyu', 'nyo'],
    ['hya', 'hyu', 'hyo'],
    ['mya', 'myu', 'myo'],
    ['rya', 'ryu', 'ryo'],

    ['gya', 'gyu', 'gyo'],
    ['ja', 'ju', 'jo'],
    ['bya', 'byu', 'byo'],
    ['pya', 'pyu', 'pyo'],
]

export const caracterListObj: Record<string, Caracter>[] = [
    {
        a: { hiragana: 'あ', katakana: 'ア' },
        i: { hiragana: 'い', katakana: 'イ' },
        u: { hiragana: 'う', katakana: 'ウ' },
        e: { hiragana: 'え', katakana: 'エ' },
        o: { hiragana: 'お', katakana: 'オ' },
    },
    {
        ka: { hiragana: 'か', katakana: 'カ' },
        ki: { hiragana: 'き', katakana: 'キ' },
        ku: { hiragana: 'く', katakana: 'ク' },
        ke: { hiragana: 'け', katakana: 'ケ' },
        ko: { hiragana: 'こ', katakana: 'コ' },
    },
    {
        sa: { hiragana: 'さ', katakana: 'サ' },
        shi: { hiragana: 'し', katakana: 'シ' },
        su: { hiragana: 'す', katakana: 'ス' },
        se: { hiragana: 'せ', katakana: 'セ' },
        so: { hiragana: 'そ', katakana: 'ソ' },
    },
    {
        ta: { hiragana: 'た', katakana: 'タ' },
        chi: { hiragana: 'ち', katakana: 'チ' },
        tsu: { hiragana: 'つ', katakana: 'ツ' },
        te: { hiragana: 'て', katakana: 'テ' },
        to: { hiragana: 'と', katakana: 'ト' },
    },
    {
        na: { hiragana: 'な', katakana: 'ナ' },
        ni: { hiragana: 'に', katakana: 'ニ' },
        nu: { hiragana: 'ぬ', katakana: 'ヌ' },
        ne: { hiragana: 'ね', katakana: 'ネ' },
        no: { hiragana: 'の', katakana: 'ノ' },
    },
    {
        ha: { hiragana: 'は', katakana: 'ハ' },
        hi: { hiragana: 'ひ', katakana: 'ヒ' },
        fu: { hiragana: 'ふ', katakana: 'フ' },
        he: { hiragana: 'へ', katakana: 'ヘ' },
        ho: { hiragana: 'ほ', katakana: 'ホ' },
    },
    {
        ma: { hiragana: 'ま', katakana: 'マ' },
        mi: { hiragana: 'み', katakana: 'ミ' },
        mu: { hiragana: 'む', katakana: 'ム' },
        me: { hiragana: 'め', katakana: 'メ' },
        mo: { hiragana: 'も', katakana: 'モ' },
    },
    {
        ya: { hiragana: 'や', katakana: 'ヤ' },
        yu: { hiragana: 'ゆ', katakana: 'ユ' },
        yo: { hiragana: 'よ', katakana: 'ヨ' },
    },
    {
        ra: { hiragana: 'ら', katakana: 'ラ' },
        ri: { hiragana: 'り', katakana: 'リ' },
        ru: { hiragana: 'る', katakana: 'ル' },
        re: { hiragana: 'れ', katakana: 'レ' },
        ro: { hiragana: 'ろ', katakana: 'ロ' },
    },
    {
        wa: { hiragana: 'わ', katakana: 'ワ' },
        wo: { hiragana: 'を', katakana: 'ヲ' },
        n: { hiragana: 'ん', katakana: 'ン' },
    },

    //tenten " e maru °
    {
        ga: { hiragana: 'が', katakana: 'ガ' },
        gi: { hiragana: 'ぎ', katakana: 'ギ' },
        gu: { hiragana: 'ぐ', katakana: 'グ' },
        ge: { hiragana: 'げ', katakana: 'ゲ' },
        go: { hiragana: 'ご', katakana: 'ゴ' },
    },
    {
        za: { hiragana: 'ざ', katakana: 'ザ' },
        ji: { hiragana: 'じ', katakana: 'ジ' },
        zu: { hiragana: 'ず', katakana: 'ズ' },
        ze: { hiragana: 'ぜ', katakana: 'ゼ' },
        zo: { hiragana: 'ぞ', katakana: 'ゾ' },
    },
    {
        da: { hiragana: 'だ', katakana: 'ダ' },
        ji2: { hiragana: 'ぢ', katakana: 'ヂ' },
        zu2: { hiragana: 'づ', katakana: 'ヅ' },
        de: { hiragana: 'で', katakana: 'デ' },
        do: { hiragana: 'ど', katakana: 'ド' },
    },
    {
        ba: { hiragana: 'ば', katakana: 'バ' },
        bi: { hiragana: 'び', katakana: 'ビ' },
        bu: { hiragana: 'ぶ', katakana: 'ブ' },
        be: { hiragana: 'べ', katakana: 'ベ' },
        bo: { hiragana: 'ぼ', katakana: 'ボ' },
    },
    {
        pa: { hiragana: 'ぱ', katakana: 'パ' },
        pi: { hiragana: 'ぴ', katakana: 'ピ' },
        pu: { hiragana: 'ぷ', katakana: 'プ' },
        pe: { hiragana: 'ぺ', katakana: 'ペ' },
        po: { hiragana: 'ぽ', katakana: 'ポ' },
    },

    // Chiisai
    {
        kya: { hiragana: 'きゃ', katakana: 'キャ' },
        kyu: { hiragana: 'きゅ', katakana: 'キュ' },
        kyo: { hiragana: 'きょ', katakana: 'キョ' },
    },
    {
        sha: { hiragana: 'しゃ', katakana: 'シャ' },
        shu: { hiragana: 'しゅ', katakana: 'シュ' },
        sho: { hiragana: 'しょ', katakana: 'ショ' },
    },
    {
        cha: { hiragana: 'ちゃ', katakana: 'チャ' },
        chu: { hiragana: 'ちゅ', katakana: 'チュ' },
        cho: { hiragana: 'ちょ', katakana: 'チョ' },
    },
    {
        nya: { hiragana: 'にゃ', katakana: 'ニャ' },
        nyu: { hiragana: 'にゅ', katakana: 'ニュ' },
        nyo: { hiragana: 'にょ', katakana: 'ニョ' },
    },
    {
        hya: { hiragana: 'ひゃ', katakana: 'ヒャ' },
        hyu: { hiragana: 'ひゅ', katakana: 'ヒュ' },
        hyo: { hiragana: 'ひょ', katakana: 'ヒョ' },
    },
    {
        mya: { hiragana: 'みゃ', katakana: 'ミャ' },
        myu: { hiragana: 'みゅ', katakana: 'ミュ' },
        myo: { hiragana: 'みょ', katakana: 'ミョ' },
    },
    {
        rya: { hiragana: 'りゃ', katakana: 'リャ' },
        ryu: { hiragana: 'りゅ', katakana: 'リュ' },
        ryo: { hiragana: 'りょ', katakana: 'リョ' },
    },
    {
        gya: { hiragana: 'ぎゃ', katakana: 'ギャ' },
        gyu: { hiragana: 'ぎゅ', katakana: 'ギュ' },
        gyo: { hiragana: 'ぎょ', katakana: 'ギョ' },
    },
    {
        ja: { hiragana: 'じゃ', katakana: 'ジャ' },
        ju: { hiragana: 'じゅ', katakana: 'ジュ' },
        jo: { hiragana: 'じょ', katakana: 'ジョ' },
    },
    {
        ja2: { hiragana: 'ぢゃ', katakana: 'ヂャ' },
        ju2: { hiragana: 'ぢゅ', katakana: 'ヂュ' },
        jo2: { hiragana: 'ぢょ', katakana: 'ヂョ' },
    },
    {
        bya: { hiragana: 'びゃ', katakana: 'ビャ' },
        byu: { hiragana: 'びゅ', katakana: 'ビュ' },
        byo: { hiragana: 'びょ', katakana: 'ビョ' },
    },
    {
        pya: { hiragana: 'ぴゃ', katakana: 'ピャ' },
        pyu: { hiragana: 'ぴゅ', katakana: 'ピュ' },
        pyo: { hiragana: 'ぴょ', katakana: 'ピョ' },
    },

]

function encontrarCaracter<T>(
    chave: string
): Caracter | undefined {
    for (const obj of caracterListObj) {
        if (obj[chave]) {
            return obj[chave];
        }
    }
    return undefined;
}
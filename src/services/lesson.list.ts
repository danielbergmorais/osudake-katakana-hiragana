export interface Lesson {
  glyphs: string[];
  romanji: string;
  portuguese: string;
}


export const lessonList: Record<string, Lesson> = {
    ao: { glyphs: ['a', 'o'], romanji: 'ao', portuguese: 'azul' },
    ie: { glyphs: ['i', 'e'], romanji: 'ie', portuguese: 'casa' },

    aka: { glyphs: ['a', 'ka'], romanji: 'aka', portuguese: 'vermelho' },
    ame: { glyphs: ['a', 'me'], romanji: 'ame', portuguese: 'chuva' },
    eki: { glyphs: ['e', 'ki'], romanji: 'eki', portuguese: 'estação' },
    imo: { glyphs: ['i', 'mo'], romanji: 'imo', portuguese: 'batata' },
    umi: { glyphs: ['u', 'mi'], romanji: 'umi', portuguese: 'mar' },

    hifu: { glyphs: ['hi', 'fu'], romanji: 'hifu', portuguese: 'pele' },
    kaki: { glyphs: ['ka', 'ki'], romanji: 'kaki', portuguese: 'ostra' },
    kaku: { glyphs: ['ka', 'ku'], romanji: 'kaku', portuguese: 'escrever' },
    kao: { glyphs: ['ka', 'o'], romanji: 'kao', portuguese: 'rosto' },
    kasa: { glyphs: ['ka', 'sa'], romanji: 'kasa', portuguese: 'guarda-chuva' },

    kiku: { glyphs: ['ki', 'ku'], romanji: 'kiku', portuguese: 'crisântemo' },
    kisu: { glyphs: ['ki', 'su'], romanji: 'kisu', portuguese: 'beijo' },
    koe: { glyphs: ['ko', 'e'], romanji: 'koe', portuguese: 'voz' },
    koke: { glyphs: ['ko', 'ke'], romanji: 'koke', portuguese: 'musgo' },
    kuki: { glyphs: ['ku', 'ki'], romanji: 'kuki', portuguese: 'caule' },

    mame: { glyphs: ['ma', 'me'], romanji: 'mame', portuguese: 'feijão' },
    momi: { glyphs: ['mo', 'mi'], romanji: 'momi', portuguese: 'arroz descascado' },
    nani: { glyphs: ['na', 'ni'], romanji: 'nani', portuguese: 'o quê' },
    nuno: { glyphs: ['nu', 'no'], romanji: 'nuno', portuguese: 'pano' },

    sake: { glyphs: ['sa', 'ke'], romanji: 'sake', portuguese: 'saquê' },
    sashi: { glyphs: ['sa', 'shi'], romanji: 'sashi', portuguese: 'espeto' },
    seki: { glyphs: ['se', 'ki'], romanji: 'seki', portuguese: 'assento' },
    shika: { glyphs: ['shi', 'ka'], romanji: 'shika', portuguese: 'cervo' },
    shiso: { glyphs: ['shi', 'so'], romanji: 'shiso', portuguese: 'perila' },//(erva japonesa)
    soko: { glyphs: ['so', 'ko'], romanji: 'soko', portuguese: 'fundo' },//fundo / ali
    sushi: { glyphs: ['su', 'shi'], romanji: 'sushi', portuguese: 'sushi' },
    suso: { glyphs: ['su', 'so'], romanji: 'suso', portuguese: 'bainha' },// barra da roupa 

    tate: { glyphs: ['ta', 'te'], romanji: 'tate', portuguese: 'escudo' },
    tochi: { glyphs: ['to', 'chi'], romanji: 'tochi', portuguese: 'castanha japonesa' },
    tsute: { glyphs: ['tsu', 'te'], romanji: 'tsute', portuguese: 'meio' },// meio / conexão

    yoru: { glyphs: ['yo', 'ru'], romanji: 'yoru', portuguese: 'noite' },
    yuki: { glyphs: ['yu', 'ki'], romanji: 'yuki', portuguese: 'neve' },
  };
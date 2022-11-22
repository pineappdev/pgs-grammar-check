import { ATN } from 'antlr4ts/atn/ATN';
import { ATNDeserializer } from 'antlr4ts/atn/ATNDeserializer';
import * as Utils from 'antlr4ts/misc/Utils';

export class PgsParserAtn {
  private static readonly _serializedATN: string =
    '\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x031\u015A\x04\x02' +
    '\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07' +
    '\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04' +
    '\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04' +
    '\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x03' +
    '\x02\x05\x020\n\x02\x03\x02\x03\x02\x05\x024\n\x02\x03\x02\x05\x027\n' +
    '\x02\x03\x02\x05\x02:\n\x02\x03\x02\x07\x02=\n\x02\f\x02\x0E\x02@\v\x02' +
    '\x03\x02\x05\x02C\n\x02\x03\x02\x03\x02\x05\x02G\n\x02\x05\x02I\n\x02' +
    '\x03\x02\x05\x02L\n\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x05\x03' +
    'S\n\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04' +
    '\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x06' +
    '\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07' +
    '\x05\x07o\n\x07\x03\x07\x05\x07r\n\x07\x03\x07\x05\x07u\n\x07\x03\x07' +
    '\x03\x07\x05\x07y\n\x07\x03\x07\x05\x07|\n\x07\x03\x07\x05\x07\x7F\n\x07' +
    '\x03\x07\x03\x07\x03\b\x03\b\x05\b\x85\n\b\x03\b\x03\b\x05\b\x89\n\b\x03' +
    '\b\x07\b\x8C\n\b\f\b\x0E\b\x8F\v\b\x03\t\x03\t\x03\t\x05\t\x94\n\t\x03' +
    '\n\x03\n\x05\n\x98\n\n\x03\n\x03\n\x05\n\x9C\n\n\x03\n\x03\n\x05\n\xA0' +
    '\n\n\x03\n\x03\n\x03\v\x03\v\x05\v\xA6\n\v\x03\v\x03\v\x05\v\xAA\n\v\x03' +
    '\v\x03\v\x05\v\xAE\n\v\x03\v\x03\v\x05\v\xB2\n\v\x03\v\x03\v\x05\v\xB6' +
    '\n\v\x03\v\x03\v\x05\v\xBA\n\v\x03\v\x03\v\x03\v\x05\v\xBF\n\v\x03\v\x03' +
    '\v\x03\f\x03\f\x05\f\xC5\n\f\x03\f\x03\f\x05\f\xC9\n\f\x03\f\x03\f\x03' +
    '\r\x03\r\x05\r\xCF\n\r\x03\r\x05\r\xD2\n\r\x03\r\x05\r\xD5\n\r\x03\r\x05' +
    '\r\xD8\n\r\x03\r\x05\r\xDB\n\r\x03\r\x05\r\xDE\n\r\x03\x0E\x03\x0E\x03' +
    '\x0E\x05\x0E\xE3\n\x0E\x03\x0E\x03\x0E\x05\x0E\xE7\n\x0E\x03\x0E\x03\x0E' +
    '\x03\x0E\x03\x0E\x05\x0E\xED\n\x0E\x03\x0E\x03\x0E\x05\x0E\xF1\n\x0E\x03' +
    '\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\xF7\n\x0E\x03\x0E\x03\x0E\x05\x0E' +
    '\xFB\n\x0E\x03\x0E\x03\x0E\x05\x0E\xFF\n\x0E\x03\x0E\x03\x0E\x03\x0E\x05' +
    '\x0E\u0104\n\x0E\x03\x0E\x03\x0E\x05\x0E\u0108\n\x0E\x03\x0E\x03\x0E\x03' +
    '\x0E\x05\x0E\u010D\n\x0E\x03\x0E\x07\x0E\u0110\n\x0E\f\x0E\x0E\x0E\u0113' +
    '\v\x0E\x03\x0F\x03\x0F\x05\x0F\u0117\n\x0F\x03\x0F\x03\x0F\x05\x0F\u011B' +
    '\n\x0F\x03\x0F\x03\x0F\x05\x0F\u011F\n\x0F\x03\x0F\x05\x0F\u0122\n\x0F' +
    '\x03\x0F\x05\x0F\u0125\n\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\u012B' +
    '\n\x0F\x03\x0F\x05\x0F\u012E\n\x0F\x03\x0F\x05\x0F\u0131\n\x0F\x03\x0F' +
    '\x05\x0F\u0134\n\x0F\x03\x10\x03\x10\x05\x10\u0138\n\x10\x03\x10\x03\x10' +
    '\x05\x10\u013C\n\x10\x03\x10\x07\x10\u013F\n\x10\f\x10\x0E\x10\u0142\v' +
    '\x10\x03\x11\x03\x11\x05\x11\u0146\n\x11\x03\x11\x03\x11\x03\x11\x03\x11' +
    '\x05\x11\u014C\n\x11\x03\x12\x03\x12\x03\x13\x03\x13\x03\x14\x03\x14\x03' +
    '\x15\x03\x15\x03\x16\x03\x16\x03\x17\x03\x17\x03\x17\x02\x02\x03\x1A\x18' +
    '\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14' +
    '\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02"\x02$\x02&\x02(\x02' +
    '*\x02,\x02\x02\x04\x03\x02\x0F\x1A\x03\x02\x1B\x1F\x02\u0188\x02/\x03' +
    '\x02\x02\x02\x04R\x03\x02\x02\x02\x06T\x03\x02\x02\x02\b\\\x03\x02\x02' +
    '\x02\nd\x03\x02\x02\x02\fl\x03\x02\x02\x02\x0E\x82\x03\x02\x02\x02\x10' +
    '\x93\x03\x02\x02\x02\x12\x95\x03\x02\x02\x02\x14\xA3\x03\x02\x02\x02\x16' +
    '\xC2\x03\x02\x02\x02\x18\xD1\x03\x02\x02\x02\x1A\xF6\x03\x02\x02\x02\x1C' +
    '\u0133\x03\x02\x02\x02\x1E\u0135\x03\x02\x02\x02 \u0145\x03\x02\x02\x02' +
    '"\u014D\x03\x02\x02\x02$\u014F\x03\x02\x02\x02&\u0151\x03\x02\x02\x02' +
    '(\u0153\x03\x02\x02\x02*\u0155\x03\x02\x02\x02,\u0157\x03\x02\x02\x02' +
    '.0\x07(\x02\x02/.\x03\x02\x02\x02/0\x03\x02\x02\x0201\x03\x02\x02\x02' +
    '1>\x05\x04\x03\x0224\x07(\x02\x0232\x03\x02\x02\x0234\x03\x02\x02\x02' +
    '46\x03\x02\x02\x0257\x07\x03\x02\x0265\x03\x02\x02\x0267\x03\x02\x02\x02' +
    '79\x03\x02\x02\x028:\x07(\x02\x0298\x03\x02\x02\x029:\x03\x02\x02\x02' +
    ':;\x03\x02\x02\x02;=\x05\x04\x03\x02<3\x03\x02\x02\x02=@\x03\x02\x02\x02' +
    '><\x03\x02\x02\x02>?\x03\x02\x02\x02?H\x03\x02\x02\x02@>\x03\x02\x02\x02' +
    'AC\x07(\x02\x02BA\x03\x02\x02\x02BC\x03\x02\x02\x02CD\x03\x02\x02\x02' +
    'DF\x07\x03\x02\x02EG\x07(\x02\x02FE\x03\x02\x02\x02FG\x03\x02\x02\x02' +
    'GI\x03\x02\x02\x02HB\x03\x02\x02\x02HI\x03\x02\x02\x02IK\x03\x02\x02\x02' +
    'JL\x07(\x02\x02KJ\x03\x02\x02\x02KL\x03\x02\x02\x02LM\x03\x02\x02\x02' +
    'MN\x07\x02\x02\x03N\x03\x03\x02\x02\x02OS\x05\x06\x04\x02PS\x05\b\x05' +
    '\x02QS\x05\n\x06\x02RO\x03\x02\x02\x02RP\x03\x02\x02\x02RQ\x03\x02\x02' +
    '\x02S\x05\x03\x02\x02\x02TU\x07 \x02\x02UV\x07(\x02\x02VW\x07!\x02\x02' +
    'WX\x07(\x02\x02XY\x07%\x02\x02YZ\x07(\x02\x02Z[\x05\x12\n\x02[\x07\x03' +
    '\x02\x02\x02\\]\x07 \x02\x02]^\x07(\x02\x02^_\x07"\x02\x02_`\x07(\x02' +
    '\x02`a\x07%\x02\x02ab\x07(\x02\x02bc\x05\x14\v\x02c\t\x03\x02\x02\x02' +
    'de\x07 \x02\x02ef\x07(\x02\x02fg\x07&\x02\x02gh\x07(\x02\x02hi\x07%\x02' +
    '\x02ij\x07(\x02\x02jk\x05\f\x07\x02k\v\x03\x02\x02\x02ln\x05(\x15\x02' +
    'mo\x07(\x02\x02nm\x03\x02\x02\x02no\x03\x02\x02\x02oq\x03\x02\x02\x02' +
    "pr\x07'\x02\x02qp\x03\x02\x02\x02qr\x03\x02\x02\x02rt\x03\x02\x02\x02" +
    'su\x07(\x02\x02ts\x03\x02\x02\x02tu\x03\x02\x02\x02uv\x03\x02\x02\x02' +
    'vx\x07\x04\x02\x02wy\x07(\x02\x02xw\x03\x02\x02\x02xy\x03\x02\x02\x02' +
    'y{\x03\x02\x02\x02z|\x05\x0E\b\x02{z\x03\x02\x02\x02{|\x03\x02\x02\x02' +
    '|~\x03\x02\x02\x02}\x7F\x07(\x02\x02~}\x03\x02\x02\x02~\x7F\x03\x02\x02' +
    '\x02\x7F\x80\x03\x02\x02\x02\x80\x81\x07\x05\x02\x02\x81\r\x03\x02\x02' +
    '\x02\x82\x8D\x05\x10\t\x02\x83\x85\x07(\x02\x02\x84\x83\x03\x02\x02\x02' +
    '\x84\x85\x03\x02\x02\x02\x85\x86\x03\x02\x02\x02\x86\x88\x07\x06\x02\x02' +
    '\x87\x89\x07(\x02\x02\x88\x87\x03\x02\x02\x02\x88\x89\x03\x02\x02\x02' +
    '\x89\x8A\x03\x02\x02\x02\x8A\x8C\x05\x10\t\x02\x8B\x84\x03\x02\x02\x02' +
    '\x8C\x8F\x03\x02\x02\x02\x8D\x8B\x03\x02\x02\x02\x8D\x8E\x03\x02\x02\x02' +
    '\x8E\x0F\x03\x02\x02\x02\x8F\x8D\x03\x02\x02\x02\x90\x94\x05(\x15\x02' +
    '\x91\x94\x05\x12\n\x02\x92\x94\x05\x14\v\x02\x93\x90\x03\x02\x02\x02\x93' +
    '\x91\x03\x02\x02\x02\x93\x92\x03\x02\x02\x02\x94\x11\x03\x02\x02\x02\x95' +
    '\x97\x07\x07\x02\x02\x96\x98\x07(\x02\x02\x97\x96\x03\x02\x02\x02\x97' +
    '\x98\x03\x02\x02\x02\x98\x99\x03\x02\x02\x02\x99\x9B\x05(\x15\x02\x9A' +
    '\x9C\x07(\x02\x02\x9B\x9A\x03\x02\x02\x02\x9B\x9C\x03\x02\x02\x02\x9C' +
    '\x9D\x03\x02\x02\x02\x9D\x9F\x05\x18\r\x02\x9E\xA0\x07(\x02\x02\x9F\x9E' +
    '\x03\x02\x02\x02\x9F\xA0\x03\x02\x02\x02\xA0\xA1\x03\x02\x02\x02\xA1\xA2' +
    '\x07\b\x02\x02\xA2\x13\x03\x02\x02\x02\xA3\xA5\x05\x16\f\x02\xA4\xA6\x07' +
    '(\x02\x02\xA5\xA4\x03\x02\x02\x02\xA5\xA6\x03\x02\x02\x02\xA6\xA7\x03' +
    '\x02\x02\x02\xA7\xA9\x05*\x16\x02\xA8\xAA\x07(\x02\x02\xA9\xA8\x03\x02' +
    '\x02\x02\xA9\xAA\x03\x02\x02\x02\xAA\xAB\x03\x02\x02\x02\xAB\xAD\x07\t' +
    '\x02\x02\xAC\xAE\x07(\x02\x02\xAD\xAC\x03\x02\x02\x02\xAD\xAE\x03\x02' +
    '\x02\x02\xAE\xAF\x03\x02\x02\x02\xAF\xB1\x05(\x15\x02\xB0\xB2\x07(\x02' +
    '\x02\xB1\xB0\x03\x02\x02\x02\xB1\xB2\x03\x02\x02\x02\xB2\xB3\x03\x02\x02' +
    '\x02\xB3\xB5\x05\x18\r\x02\xB4\xB6\x07(\x02\x02\xB5\xB4\x03\x02\x02\x02' +
    '\xB5\xB6\x03\x02\x02\x02\xB6\xB7\x03\x02\x02\x02\xB7\xB9\x07\n\x02\x02' +
    '\xB8\xBA\x07(\x02\x02\xB9\xB8\x03\x02\x02\x02\xB9\xBA\x03\x02\x02\x02' +
    '\xBA\xBB\x03\x02\x02\x02\xBB\xBC\x05*\x16\x02\xBC\xBE\x05,\x17\x02\xBD' +
    '\xBF\x07(\x02\x02\xBE\xBD\x03\x02\x02\x02\xBE\xBF\x03\x02\x02\x02\xBF' +
    '\xC0\x03\x02\x02\x02\xC0\xC1\x05\x16\f\x02\xC1\x15\x03\x02\x02\x02\xC2' +
    '\xC4\x07\x07\x02\x02\xC3\xC5\x07(\x02\x02\xC4\xC3\x03\x02\x02\x02\xC4' +
    '\xC5\x03\x02\x02\x02\xC5\xC6\x03\x02\x02\x02\xC6\xC8\x05\x18\r\x02\xC7' +
    '\xC9\x07(\x02\x02\xC8\xC7\x03\x02\x02\x02\xC8\xC9\x03\x02\x02\x02\xC9' +
    '\xCA\x03\x02\x02\x02\xCA\xCB\x07\b\x02\x02\xCB\x17\x03\x02\x02\x02\xCC' +
    '\xCE\x07\v\x02\x02\xCD\xCF\x07(\x02\x02\xCE\xCD\x03\x02\x02\x02\xCE\xCF' +
    '\x03\x02\x02\x02\xCF\xD0\x03\x02\x02\x02\xD0\xD2\x05\x1A\x0E\x02\xD1\xCC' +
    '\x03\x02\x02\x02\xD1\xD2\x03\x02\x02\x02\xD2\xD4\x03\x02\x02\x02\xD3\xD5' +
    '\x07(\x02\x02\xD4\xD3\x03\x02\x02\x02\xD4\xD5\x03\x02\x02\x02\xD5\xD7' +
    '\x03\x02\x02\x02\xD6\xD8\x07#\x02\x02\xD7\xD6\x03\x02\x02\x02\xD7\xD8' +
    '\x03\x02\x02\x02\xD8\xDA\x03\x02\x02\x02\xD9\xDB\x07(\x02\x02\xDA\xD9' +
    '\x03\x02\x02\x02\xDA\xDB\x03\x02\x02\x02\xDB\xDD\x03\x02\x02\x02\xDC\xDE' +
    '\x05\x1C\x0F\x02\xDD\xDC\x03\x02\x02\x02\xDD\xDE\x03\x02\x02\x02\xDE\x19' +
    '\x03\x02\x02\x02\xDF\xE0\b\x0E\x01\x02\xE0\xE2\x07\x07\x02\x02\xE1\xE3' +
    '\x07(\x02\x02\xE2\xE1\x03\x02\x02\x02\xE2\xE3\x03\x02\x02\x02\xE3\xE4' +
    '\x03\x02\x02\x02\xE4\xE6\x05\x1A\x0E\x02\xE5\xE7\x07(\x02\x02\xE6\xE5' +
    '\x03\x02\x02\x02\xE6\xE7\x03\x02\x02\x02\xE7\xE8\x03\x02\x02\x02\xE8\xE9' +
    '\x07\b\x02\x02\xE9\xF7\x03\x02\x02\x02\xEA\xEC\x07\t\x02\x02\xEB\xED\x07' +
    '(\x02\x02\xEC\xEB\x03\x02\x02\x02\xEC\xED\x03\x02\x02\x02\xED\xEE\x03' +
    '\x02\x02\x02\xEE\xF0\x05\x1A\x0E\x02\xEF\xF1\x07(\x02\x02\xF0\xEF\x03' +
    '\x02\x02\x02\xF0\xF1\x03\x02\x02\x02\xF1\xF2\x03\x02\x02\x02\xF2\xF3\x07' +
    '\n\x02\x02\xF3\xF7\x03\x02\x02\x02\xF4\xF7\x05&\x14\x02\xF5\xF7\x05(\x15' +
    '\x02\xF6\xDF\x03\x02\x02\x02\xF6\xEA\x03\x02\x02\x02\xF6\xF4\x03\x02\x02' +
    '\x02\xF6\xF5\x03\x02\x02\x02\xF7\u0111\x03\x02\x02\x02\xF8\xFA\f\x07\x02' +
    '\x02\xF9\xFB\x07(\x02\x02\xFA\xF9\x03\x02\x02\x02\xFA\xFB\x03\x02\x02' +
    '\x02\xFB\xFC\x03\x02\x02\x02\xFC\xFE\x07\f\x02\x02\xFD\xFF\x07(\x02\x02' +
    '\xFE\xFD\x03\x02\x02\x02\xFE\xFF\x03\x02\x02\x02\xFF\u0100\x03\x02\x02' +
    '\x02\u0100\u0110\x05\x1A\x0E\b\u0101\u0103\f\x06\x02\x02\u0102\u0104\x07' +
    '(\x02\x02\u0103\u0102\x03\x02\x02\x02\u0103\u0104\x03\x02\x02\x02\u0104' +
    '\u0105\x03\x02\x02\x02\u0105\u0107\x07\r\x02\x02\u0106\u0108\x07(\x02' +
    '\x02\u0107\u0106\x03\x02\x02\x02\u0107\u0108\x03\x02\x02\x02\u0108\u0109' +
    '\x03\x02\x02\x02\u0109\u0110\x05\x1A\x0E\x07\u010A\u010C\f\x05\x02\x02' +
    '\u010B\u010D\x07(\x02\x02\u010C\u010B\x03\x02\x02\x02\u010C\u010D\x03' +
    '\x02\x02\x02\u010D\u010E\x03\x02\x02\x02\u010E\u0110\x07\x0E\x02\x02\u010F' +
    '\xF8\x03\x02\x02\x02\u010F\u0101\x03\x02\x02\x02\u010F\u010A\x03\x02\x02' +
    '\x02\u0110\u0113\x03\x02\x02\x02\u0111\u010F\x03\x02\x02\x02\u0111\u0112' +
    '\x03\x02\x02\x02\u0112\x1B\x03\x02\x02\x02\u0113\u0111\x03\x02\x02\x02' +
    '\u0114\u0116\x07\x04\x02\x02\u0115\u0117\x07(\x02\x02\u0116\u0115\x03' +
    '\x02\x02\x02\u0116\u0117\x03\x02\x02\x02\u0117\u0118\x03\x02\x02\x02\u0118' +
    '\u0121\x05\x1E\x10\x02\u0119\u011B\x07(\x02\x02\u011A\u0119\x03\x02\x02' +
    '\x02\u011A\u011B\x03\x02\x02\x02\u011B\u011C\x03\x02\x02\x02\u011C\u011E' +
    '\x07\x06\x02\x02\u011D\u011F\x07(\x02\x02\u011E\u011D\x03\x02\x02\x02' +
    '\u011E\u011F\x03\x02\x02\x02\u011F\u0120\x03\x02\x02\x02\u0120\u0122\x07' +
    '#\x02\x02\u0121\u011A\x03\x02\x02\x02\u0121\u0122\x03\x02\x02\x02\u0122' +
    '\u0124\x03\x02\x02\x02\u0123\u0125\x07(\x02\x02\u0124\u0123\x03\x02\x02' +
    '\x02\u0124\u0125\x03\x02\x02\x02\u0125\u0126\x03\x02\x02\x02\u0126\u0127' +
    '\x07\x05\x02\x02\u0127\u0134\x03\x02\x02\x02\u0128\u012A\x07\x04\x02\x02' +
    '\u0129\u012B\x07(\x02\x02\u012A\u0129\x03\x02\x02\x02\u012A\u012B\x03' +
    '\x02\x02\x02\u012B\u012D\x03\x02\x02\x02\u012C\u012E\x07#\x02\x02\u012D' +
    '\u012C\x03\x02\x02\x02\u012D\u012E\x03\x02\x02\x02\u012E\u0130\x03\x02' +
    '\x02\x02\u012F\u0131\x07(\x02\x02\u0130\u012F\x03\x02\x02\x02\u0130\u0131' +
    '\x03\x02\x02\x02\u0131\u0132\x03\x02\x02\x02\u0132\u0134\x07\x05\x02\x02' +
    '\u0133\u0114\x03\x02\x02\x02\u0133\u0128\x03\x02\x02\x02\u0134\x1D\x03' +
    '\x02\x02\x02\u0135\u0140\x05 \x11\x02\u0136\u0138\x07(\x02\x02\u0137\u0136' +
    '\x03\x02\x02\x02\u0137\u0138\x03\x02\x02\x02\u0138\u0139\x03\x02\x02\x02' +
    '\u0139\u013B\x07\x06\x02\x02\u013A\u013C\x07(\x02\x02\u013B\u013A\x03' +
    '\x02\x02\x02\u013B\u013C\x03\x02\x02\x02\u013C\u013D\x03\x02\x02\x02\u013D' +
    '\u013F\x05 \x11\x02\u013E\u0137\x03\x02\x02\x02\u013F\u0142\x03\x02\x02' +
    '\x02\u0140\u013E\x03\x02\x02\x02\u0140\u0141\x03\x02\x02\x02\u0141\x1F' +
    '\x03\x02\x02\x02\u0142\u0140\x03\x02\x02\x02\u0143\u0144\x07$\x02\x02' +
    '\u0144\u0146\x07(\x02\x02\u0145\u0143\x03\x02\x02\x02\u0145\u0146\x03' +
    '\x02\x02\x02\u0146\u0147\x03\x02\x02\x02\u0147\u0148\x05$\x13\x02\u0148' +
    '\u0149\x07(\x02\x02\u0149\u014B\x05"\x12\x02\u014A\u014C\x07(\x02\x02' +
    '\u014B\u014A\x03\x02\x02\x02\u014B\u014C\x03\x02\x02\x02\u014C!\x03\x02' +
    '\x02\x02\u014D\u014E\x07*\x02\x02\u014E#\x03\x02\x02\x02\u014F\u0150\x07' +
    "*\x02\x02\u0150%\x03\x02\x02\x02\u0151\u0152\x07*\x02\x02\u0152'\x03" +
    '\x02\x02\x02\u0153\u0154\x07*\x02\x02\u0154)\x03\x02\x02\x02\u0155\u0156' +
    '\t\x02\x02\x02\u0156+\x03\x02\x02\x02\u0157\u0158\t\x03\x02\x02\u0158' +
    '-\x03\x02\x02\x02B/369>BFHKRnqtx{~\x84\x88\x8D\x93\x97\x9B\x9F\xA5\xA9' +
    '\xAD\xB1\xB5\xB9\xBE\xC4\xC8\xCE\xD1\xD4\xD7\xDA\xDD\xE2\xE6\xEC\xF0\xF6' +
    '\xFA\xFE\u0103\u0107\u010C\u010F\u0111\u0116\u011A\u011E\u0121\u0124\u012A' +
    '\u012D\u0130\u0133\u0137\u013B\u0140\u0145\u014B';

  private static atn: ATN;

  public static get instance(): ATN {
    if (!this.atn) {
      this.atn = new ATNDeserializer().deserialize(
        Utils.toCharArray(PgsParserAtn._serializedATN)
      );
    }

    return this.atn;
  }

  public static get serializedATN(): string {
    return PgsParserAtn._serializedATN;
  }
}

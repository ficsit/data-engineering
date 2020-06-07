import { Reader } from '../../../readers';
import {TRange} from "./TRange";


export async function FMovieSceneFrameRange(reader: Reader) {
  return {
    Value: await reader.read(TRange)
  };
}

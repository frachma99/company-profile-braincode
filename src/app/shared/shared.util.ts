import {isLogEnabled} from './shared.constant';

/**
 * @method goorLog
 * disable-able logger
 * @return
 * null
 */
export function gooritaLog(message?: any, ...optionalParams: any[]): void {
  if (isLogEnabled) {
    console.log('GOORITALOG : ', message, ...optionalParams);
  }
}

export function safelyParseJSON(json) : Object | undefined {
    // This function cannot be optimised, it's best to
    // keep it small!
    var parsed;
  
    try {
      parsed = JSON.parse(json)
    } catch (e) {
      // Oh well, but whatever...
      console.log('ex when trying to parse json = ' + e);
    }
  
    return parsed // Could be undefined!
  }
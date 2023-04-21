let debugLogging = false;

export function setDebugLogging(value: boolean) {
  debugLogging = value;
}

export function debug(log: string | LogMessage) {
  if (!debugLogging) {
    return;
  }

  if (isComplexLog(log)) {
    console.log(log.msg);
    console.log(log.context);
  } else {
    console.log(log);
  }
}

interface LogMessage {
  msg: string;
  context: object;
}

function isComplexLog(log: string | LogMessage): log is LogMessage {
  return (log as LogMessage).msg !== undefined;
}

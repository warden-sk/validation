/*
 * Copyright 2023 Marek Kobida
 */

const errorMessages = {
  FILE_NOT_READABLE: 'The file is not readable.',
  FILE_NOT_WRITABLE: 'The file is not writable.',
  FUNCTION_NOT_IMPLEMENTED: 'The function is not implemented.',
  JSON_NOT_DECODABLE: 'The file is not decodable.',
  JSON_NOT_ENCODABLE: 'The file is not encodable.',
} as const;

export default errorMessages;

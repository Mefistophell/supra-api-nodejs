module.exports = {
  NO_ARGUMENT: { message: 'Required arguments not supplied', status: 500, code: 'NO_ARGUMENT_ERROR' },
  ARGUMENT_TYPE: { message: 'Wrong argument type', status: 500, code: 'ARGUMENT_TYPE_ERROR' },
  ACCESS: { message: 'Access denied', status: 403, code: 'ACCESS_ERROR' },
  INVALID_PASSWORD: { message: 'Invalid password', status: 403, code: 'INVALID_PASSWORD_ERROR' },
  TOKEN_EXPIRED: { message: 'Token expired', status: 401, code: 'TOKEN_EXPIRED_ERROR' },
  TOKEN_NOT_SIGNED: { message: 'Token not signed', status: 500, code: 'TOKEN_NOT_SIGNED_ERROR' },
  BAD_REFRESH_TOKEN: { message: 'Bad Refresh token', status: 401, code: 'BAD_REFRESH_TOKEN_ERROR' },
  NOT_FOUND: { message: 'Empty response, not found', status: 404, code: 'NOT_FOUND_ERROR' },
  DB: { status: 500, code: 'DB_ERROR' }
}
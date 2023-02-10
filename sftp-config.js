const server1 = {
  host: '-', // string Hostname or IP of server.
  port: 22, // Port number of the server.
  forceIPv4: false, // boolean (optional) Only connect via IPv4 address
  forceIPv6: false, // boolean (optional) Only connect via IPv6 address
  username: '-', // string Username for authentication.
  password: '-', // string Password for password-based user authentication
  // username: 'ap_admin', // string Username for authentication.
  // password: 'IDC_app03!', // string Password for password-based user authentication
  // agent: process.env.SSH_AGENT, // string - Path to ssh-agent's UNIX socket
  // privateKey: fs.readFileSync('/path/to/key'), // Buffer or string that contains
  // passphrase: 'a pass phrase', // string - For an encrypted private key
  readyTimeout: 200000, // integer How long (in ms) to wait for the SSH handshake
  // strictVendor: true, // boolean - +Performs a strict server vendor check
  // debug: myDebug, // function - Set this to a function that receives a single
                // string argument to get detailed (local) debug information.
  retries: 4, // integer. Number of times to retry connecting
  retry_factor: 4, // integer. Time factor used to calculate time between retries
  retry_minTimeout: 100000 // integer. Minimum timeout between attempts
};

const server2 = {
  host: '-', // string Hostname or IP of server.
  port: 22, // Port number of the server.
  forceIPv4: false, // boolean (optional) Only connect via IPv4 address
  forceIPv6: false, // boolean (optional) Only connect via IPv6 address
  username: '-', // string Username for authentication.
  password: '-', // string Password for password-based user authentication
  // username: 'ap_admin', // string Username for authentication.
  // password: 'IDC_app03!', // string Password for password-based user authentication
  // agent: process.env.SSH_AGENT, // string - Path to ssh-agent's UNIX socket
  // privateKey: fs.readFileSync('/path/to/key'), // Buffer or string that contains
  // passphrase: 'a pass phrase', // string - For an encrypted private key
  readyTimeout: 200000, // integer How long (in ms) to wait for the SSH handshake
  // strictVendor: true, // boolean - +Performs a strict server vendor check
  // debug: myDebug, // function - Set this to a function that receives a single
                // string argument to get detailed (local) debug information.
  retries: 4, // integer. Number of times to retry connecting
  retry_factor: 4, // integer. Time factor used to calculate time between retries
  retry_minTimeout: 100000 // integer. Minimum timeout between attempts
};
 
module.exports = { 
  server1
  , server2 
};
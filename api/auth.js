export default function handler(req, res) {
    const auth = { login: process.env.BASIC_AUTH_USER, password: process.env.BASIC_AUTH_PASS };
    
    // 認証情報が正しいか確認
    const b64auth = (req.headers.authorization || '').split(' ')[1] || '';
    const [login, password] = Buffer.from(b64auth, 'base64').toString().split(':');
  
    if (login && password && login === auth.login && password === auth.password) {
      // 認証成功
      res.writeHead(302, { Location: req.query.next || '/' });
      res.end();
    } else {
      // 認証失敗
      res.setHeader('WWW-Authenticate', 'Basic realm="401"');
      res.status(401).send('Authentication required.');
    }
  }
  
package prv.boot.nope.Common.Util.token;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.Jwts;

public class JWTToken {

    private final String key    = "test";

    private String token;

    public JWTToken() {}
    public JWTToken(String token) {
        this.token  = token;
    }

    public void createToken(Map<String, Object> payloads) {

        // header setting
        Map<String, Object> headers = new HashMap<>();
        headers.put("typ", "JWT");
        headers.put("alg", TokenOption.ALG_NAME.getStringValue());

        long expireTime = TokenOption.EXPIRE_TIME.getLongValue();
        Date expireDate = new Date();
        expireDate.setTime(expireDate.getTime() + expireTime);
        
        // token builder
        String token    = Jwts.builder()
                                .setHeader(headers)
                                .setClaims(payloads)
                                .setSubject("user")
                                .setExpiration(expireDate)
                                .signWith(TokenOption.ALG.getAlgValue(), this.key.getBytes())
                                .compact();

        this.token  = token;
    }

    public boolean verifyToken() {
        boolean _verify = true;

        try {
            Jwts.parser()
                .setSigningKey(this.key.getBytes(TokenOption.ENCODING.getStringValue()))
                .parseClaimsJws(this.getToken())
                .getBody();

        } catch(ExpiredJwtException e) {
            _verify = false;
        } catch(Exception e) {
            _verify = false;
        }

        return _verify;
    }

    public String getToken() { return this.token; }
    
}

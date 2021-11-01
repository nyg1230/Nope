package prv.boot.nope.Common.Util.Token;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.JwtBuilder;
import io.jsonwebtoken.Jwts;

public class JWTToken {

    private final String key    = "test";

    private String token;

    public JWTToken() {}
    public JWTToken(String token) {
        this.token  = token;
    }

    public void createToken(Map<String, Object> payload) {
		JwtBuilder jb	= Jwts.builder();
		jb.setClaims(payload);
		
		this.createToken(jb);
    }

	public void createToken(Claims payload) {
		JwtBuilder jb	= Jwts.builder();
		jb.setClaims(payload);
		
		this.createToken(jb);
	}

	private void createToken(JwtBuilder jb) {
		// header setting
        Map<String, Object> headers = new HashMap<>();
        headers.put("typ", "JWT");
        headers.put("alg", TokenOption.ALG_NAME.getStringValue());

        long expireTime = TokenOption.EXPIRE_TIME.getLongValue();
        Date expireDate = new Date();
        expireDate.setTime(expireDate.getTime() + expireTime);

		// token builder
        String token    = jb.setHeader(headers)
							.setSubject("user")
							.setExpiration(expireDate)
							.signWith(TokenOption.ALG.getAlgValue(), this.key.getBytes())
							.compact();

        this.token  = token;
	}

	public void reissuance() {
		try {
			if(this.verifyToken()) this.createToken(this.getPayload());
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

    public boolean verifyToken() {
        boolean _verify = true;

        try {
            this.getPayload();

        } catch(ExpiredJwtException e) {
            _verify = false;
        } catch(Exception e) {
            _verify = false;
        }

        return _verify;
    }

    public String getToken() { return this.token; }
	public Claims getPayload() throws Exception {

		Claims payload	= Jwts.parser()
                .setSigningKey(this.key.getBytes(TokenOption.ENCODING.getStringValue()))
                .parseClaimsJws(this.getToken())
                .getBody();

		return payload;
	}
    
}

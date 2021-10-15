package prv.boot.nope.Common.Util.token;

import io.jsonwebtoken.SignatureAlgorithm;

public enum TokenOption {
    ALG_NAME("HS256"),
    ALG(SignatureAlgorithm.HS256),
    EXPIRE_TIME(1000 * 60L * 30L),
    ENCODING("UTF-8")

    ;

    final Object value;

    TokenOption(Object value) {
        this.value  = value;
    }

    public String getStringValue() { return String.valueOf(this.value); }
    public Long getLongValue() { return (long)this.value; }
    public SignatureAlgorithm getAlgValue() { return (SignatureAlgorithm)this.value; }
}

package prv.boot.nope.Common.Util.Mail;

import java.util.Iterator;
import java.util.Map;
import java.util.Properties;

public enum MailSmtp {
    GOOGLE(Map.ofEntries(
        Map.entry("mail.smtp.host", "smtp.gmail.com"),
        Map.entry("mail.smtp.port", 465),
        Map.entry("mail.smtp.auth", "true"),
        Map.entry("mail.smtp.ssl.enable", "true"),
        Map.entry("mail.smtp.trust", "smtp.gmail.com")
    )),
    ;

    final private Map<String,Object> map;

    MailSmtp(Map<String, Object> map) {
        this.map    = map;
    }

    public Properties getSmtpSetting() {
        Properties props    = new Properties();

        Iterator<String> mapIterable    = this.map.keySet().iterator();
        while(mapIterable.hasNext()) {
            String key      = mapIterable.next();
            Object value    = this.map.get(key);
            props.put(key, value);
        }

        return props;
    }
}

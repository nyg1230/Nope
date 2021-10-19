package prv.boot.nope.Common.Util;

import java.util.Arrays;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

public class CustomUtil {
    
    private List<String> HEADERS_IP   = Arrays.asList(
        "X-Forwarded-For",
        "Proxy-Client-IP",
        "WL-Proxy-Client-IP",
        "HTTP_CLIENT_IP",
        "HTTP_X_FORWARDED_FOR"
    );

    public String getClientIP(HttpServletRequest req) {

        String clientIP  = null;

        for(String header : HEADERS_IP) {
            clientIP    = req.getHeader(header);
            if(clientIP != null) break;
        }

        return clientIP == null ? req.getRemoteAddr() : clientIP;
    }

    public String randomString(int len) {
        String result   = "";

        

        return result;
    }

}

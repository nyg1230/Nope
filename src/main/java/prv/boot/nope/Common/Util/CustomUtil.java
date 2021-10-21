package prv.boot.nope.Common.Util;

import java.security.MessageDigest;
import java.security.SecureRandom;
import java.util.Arrays;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

public class CustomUtil {
	
	private final List<String> HEADERS_IP   = Arrays.asList(
		"X-Forwarded-For",
		"Proxy-Client-IP",
		"WL-Proxy-Client-IP",
		"HTTP_CLIENT_IP",
		"HTTP_X_FORWARDED_FOR"
	);

	private final static String	ENCRYPT_ALGORITHM   = "SHA-256";
	private final static int	SALT_SIZE           = 16;
	private final static int	HASHING_COUNT       = 100;

	public String getClientIP(HttpServletRequest req) {

		String clientIP  = null;

		for(String header : HEADERS_IP) {
			clientIP    = req.getHeader(header);
			if(clientIP != null) break;
		}

		return clientIP == null ? req.getRemoteAddr() : clientIP;
	}

	// password start
	public String text2encrypt(String txt, String salt) {
		return hasing(txt.getBytes(), salt);
	}

	private String hasing(byte[] bytes, String salt) {
		
		try {
			MessageDigest md    = MessageDigest.getInstance(ENCRYPT_ALGORITHM);

			for(int cnt = 0; cnt < HASHING_COUNT; cnt++) {
				String tmp  = byte2String(bytes) + salt;
				md.update(tmp.getBytes());
				bytes   = md.digest();
			}

		} catch(Exception e) {
			e.printStackTrace();
		}

		return byte2String(bytes);
	}

	public String getSalt() {
		SecureRandom rnd    = new SecureRandom();
		byte[] tmp  = new byte[SALT_SIZE];
		rnd.nextBytes(tmp);

		return byte2String(tmp);
	}

	private String byte2String(byte[] bytes) {
		String result   = "";

		for(byte b : bytes) {
			result += String.format("%02x", b);
		}

		return result;
	}
	// password end

	public String randomString(int len) {
		String result   = "";

		

		return result;
	}

}

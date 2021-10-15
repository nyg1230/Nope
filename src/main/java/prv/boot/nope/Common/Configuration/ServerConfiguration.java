package prv.boot.nope.Common.Configuration;

import java.util.Arrays;
import java.util.List;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import prv.boot.nope.Common.Interceptor.ApiTokenCheckInterceptor;

@Configuration
public class ServerConfiguration implements WebMvcConfigurer {
    
    private static final List<String> URL_PATTERNS_API  = Arrays.asList("/public/api/**");

    @Override
    public void addInterceptors(InterceptorRegistry reg) {
        reg.addInterceptor(new ApiTokenCheckInterceptor()).addPathPatterns(URL_PATTERNS_API);
    }

}

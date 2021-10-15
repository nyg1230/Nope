package prv.boot.nope.Scheduling.test;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@Component
public class test {
    
    // @Scheduled(cron = "*/20 * * * * *")
    public void testtest() {
        // System.out.println("test");
        try {
            Document t  = Jsoup.connect("https://finance.naver.com/item/sise_day.naver?code=005935&page=1").get();
            // System.out.println(t.html());
            Elements els    = t.select("table.type2 tbody tr[onmouseover='mouseOver(this)']");
            System.out.println(els.size());
            for(Element el : els) {
                // System.out.println(el.html());
                Elements tds = el.select("td span.tah");
                List a = new ArrayList<>();
                for(Element td : tds) {
                    // System.out.println(td.className() + " " + td.text());
                    a.add(td.text());
                    // System.out.println(td.className().indexOf("nv01"));
                    // System.out.println();
                }
                System.out.println(a.toString());
            }
            System.out.println("end");
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}

package prv.boot.nope.Common.Util.Mail;

public enum MailAccount {
    ADMIN("GOOGLE", "nyg1463", "1994n200n"),
    ;

    final private String smtp;
    final private String mailAccount;
    final private String mailPassword;

    MailAccount(String smtp, String mailAccount, String mailPassword) {
        this.smtp           = smtp;
        this.mailAccount    = mailAccount;
        this.mailPassword   = mailPassword;
    }

    public String getSmtp() { return this.smtp; }
    public String getMailAccount() { return this.mailAccount; }
    public String getMailPassword() { return this.mailPassword; }

}

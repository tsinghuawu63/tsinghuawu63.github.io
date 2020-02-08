# -FrontPage-

Options None

<Limit GET POST>
order deny,allow
deny from all
allow from all
</Limit>
<Limit PUT>
order deny,allow
deny from all
</Limit>
AuthName default_realm
AuthUserFile d:/programs/tools/frontpage98/webserver/content/_vti_pvt/service.pwd
AuthGroupFile d:/programs/tools/frontpage98/webserver/content/_vti_pvt/service.grp

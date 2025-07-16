# Apache Proxy Server | Foundry Virtual Tabletop

Source: https://foundryvtt.com/article/apache/

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Apache Proxy Server


## 

Apache is a popular web server which you may consider using as a proxy server in front of Foundry Virtual Tabletop. There are a number of advantages to using a proxy server like Apache like using a subdomain, using an external port that is different than your Foundry VTT port, stronger access controls, and faster serving of static files. This article provides a basic overview of using Apache with Foundry Virtual Tabletop. There are many advanced options which are not covered here.

Please note that using a proxy server like Apache, while advantageous for dedicated web hosts, is absolutely not required in order to use Foundry Virtual Tabletop.


### Step 1 - Install Apache

Start by installing Apache for your Linux distribution. Some common examples are provided below, but consult the Apache documentation for your Linux flavor.

This guide assumes a basic level of familiarity with the Linux operating system and how to interface with it. If you are brand new to Linux we recommend starting with a beginner's tutorial to the Linux command line before proceeding.


#### Ubuntu or Debian

```javascript
sudo apt install apache2
```

`sudo apt install apache2`
#### Red Hat or CentOS

```javascript
sudo yum update -y
sudo yum -y install httpd
```

`sudo yum update -y
sudo yum -y install httpd`
#### Amazon Linux 2

```javascript
sudo yum update -y
sudo yum -y install httpd
```

`sudo yum update -y
sudo yum -y install httpd`
### Step 2 - Configure Apache

Apache requires a configuration file which defines how the server functions. A functional starting point to begin testing Apache is the following configuration which does not use SSL certificates (we can enable those later). For the purposes of this example we assume that Foundry Virtual Tabletop is running from /home/ec2-user/foundryvtt, but your application installation path may be different, you should adjust the configuration file accordingly.

`/home/ec2-user/foundryvtt`Make sure to update the references to your.hostname in the configuration.

`your.hostname````javascript
# Apache .conf for reverse proxy of Foundry Virtual Tabletop.
# Requires mod_proxy mod_proxy_http mod_proxy_wstunnel for WebSocket support.
# For Ubuntu and Debian this goes in /etc/apache2/apache2.conf
# For Amazon Linux, CentOS, and RHEL this goes in /etc/httpd/conf/httpd.conf

<VirtualHost *:80>
    ServerName              your.hostname.com

    # Proxy Server Configuration
    ProxyPreserveHost       On
    ProxyPass "/socket.io/" "ws://localhost:30000/socket.io/"
    ProxyPass /             http://localhost:30000/
    ProxyPassReverse /      http://localhost:30000/
</VirtualHost>
# Increase the maximum upload limit Apache will allow
<Location>
LimitRequestBody 104857600 # 100MB upload
</Location>
```

`# Apache .conf for reverse proxy of Foundry Virtual Tabletop.
# Requires mod_proxy mod_proxy_http mod_proxy_wstunnel for WebSocket support.
# For Ubuntu and Debian this goes in /etc/apache2/apache2.conf
# For Amazon Linux, CentOS, and RHEL this goes in /etc/httpd/conf/httpd.conf

<VirtualHost *:80>
    ServerName              your.hostname.com

    # Proxy Server Configuration
    ProxyPreserveHost       On
    ProxyPass "/socket.io/" "ws://localhost:30000/socket.io/"
    ProxyPass /             http://localhost:30000/
    ProxyPassReverse /      http://localhost:30000/
</VirtualHost>
# Increase the maximum upload limit Apache will allow
<Location>
LimitRequestBody 104857600 # 100MB upload
</Location>`Once you have configured Apache, there are some configurations for Foundry Virtual Tabletop in the Application Configuration article you will also want to apply. Set the following options in your Foundry VTT {userData}/Config/options.json file which will instruct Foundry that the server is running with a proxy server in front of it on port 80.

`{userData}/Config/options.json`Please be aware that if your Foundry VTT location is hosted at a subfolder location, such as mysite.com/foundryvtt, you will need to define a routePrefix as outlined in the Application Configuration article.

`mysite.com/foundryvtt````javascript
"hostname": "your.hostname.com",
"routePrefix": null,
"sslCert": null,
"sslKey": null,
"port": 30000,
"proxyPort": 80
```

`"hostname": "your.hostname.com",
"routePrefix": null,
"sslCert": null,
"sslKey": null,
"port": 30000,
"proxyPort": 80`Once you have configured your reverse proxy, you will want to restart the proxy instance as well as your Foundry VTT instance to ensure that the new settings are active.


### Step 3 - Start, Stop, and Restart Apache

You can use the systemctl utility to easily manage your Apache server.

`systemctl````javascript
# For Ubuntu and Debian
sudo systemctl start apache2
sudo systemctl stop apache2
sudo systemctl restart apache2

# For Amazon Linux, RHEL, or CentOS
sudo systemctl start httpd
sudo systemctl stop httpd
sudo systemctl restart httpd
```

`# For Ubuntu and Debian
sudo systemctl start apache2
sudo systemctl stop apache2
sudo systemctl restart apache2

# For Amazon Linux, RHEL, or CentOS
sudo systemctl start httpd
sudo systemctl stop httpd
sudo systemctl restart httpd`
### Step 4 - Add SSL Certificates (Optional)

For more advanced usage you can add SSL Certificates for added security. Start by creating SSL Certificates, we recommend using Certbot. Once your certificates are created, your Apache configuration file will be updated to use port 443 and the SSL certificates you have created.

Make sure to update the references to your.hostname in the configuration.

`your.hostname````javascript
# Apache .conf for reverse proxy of Foundry Virtual Tabletop.
# Requires mod_proxy mod_proxy_http mod_proxy_wstunnel for WebSocket support.
# For Ubuntu and Debian this goes in /etc/apache2/apache2.conf
# For Amazon Linux, Centos, and RedHat this goes in /etc/httpd/conf/httpd.conf

<VirtualHost *:443>
    ServerName              your.hostname.com

    # SSL Configuration
    SSLCertificateKeyFile   "/etc/letsencrypt/live/your.hostname.com/privkey.pem"
    SSLCertificateFile      "/etc/letsencrypt/live/your.hostname.com/fullchain.pem"
    Include                 /etc/letsencrypt/options-ssl-apache.conf

    # Proxy Server Configuration
    ProxyPreserveHost       On
    ProxyPass "/socket.io/" "ws://localhost:30000/socket.io/"
    ProxyPass /             http://localhost:30000/
    ProxyPassReverse /      http://localhost:30000/
</VirtualHost>
```

`# Apache .conf for reverse proxy of Foundry Virtual Tabletop.
# Requires mod_proxy mod_proxy_http mod_proxy_wstunnel for WebSocket support.
# For Ubuntu and Debian this goes in /etc/apache2/apache2.conf
# For Amazon Linux, Centos, and RedHat this goes in /etc/httpd/conf/httpd.conf

<VirtualHost *:443>
    ServerName              your.hostname.com

    # SSL Configuration
    SSLCertificateKeyFile   "/etc/letsencrypt/live/your.hostname.com/privkey.pem"
    SSLCertificateFile      "/etc/letsencrypt/live/your.hostname.com/fullchain.pem"
    Include                 /etc/letsencrypt/options-ssl-apache.conf

    # Proxy Server Configuration
    ProxyPreserveHost       On
    ProxyPass "/socket.io/" "ws://localhost:30000/socket.io/"
    ProxyPass /             http://localhost:30000/
    ProxyPassReverse /      http://localhost:30000/
</VirtualHost>`Once you have edited the Apache configuration to include your SSL certificates, be sure to do a configuration test before restarting your server. Lastly, there are some additional configuration options for Foundry Virtual Tabletop you will also want to apply. Set the following options in your Foundry VTT {userData}/Config/options.json file which will instruct Foundry that the server is running with a proxy server in front of it on port 443.

`{userData}/Config/options.json````javascript
"hostname": "your.hostname.com",
"routePrefix": null,
"sslCert": null,
"sslKey": null,
"port": 30000,
"proxyPort": 443,
"proxySSL": true
```

`"hostname": "your.hostname.com",
"routePrefix": null,
"sslCert": null,
"sslKey": null,
"port": 30000,
"proxyPort": 443,
"proxySSL": true`
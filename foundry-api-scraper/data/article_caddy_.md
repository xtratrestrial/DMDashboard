# Caddy Proxy Server | Foundry Virtual Tabletop

Source: https://foundryvtt.com/article/caddy/

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Caddy Proxy Server


## 

This is a quick tutorial that will cover how to setup a virtual server that uses Caddy to proxy
    HTTPS for Foundry.

Please note that using a proxy server like Caddy, while advantageous for
    dedicated web hosts, is absolutely not required in order to use Foundry Virtual Tabletop.


### Step 1 - Create your Virtual Host

While setting up a virtual server to host Foundry is outside the scope of this tutorial, here are a few helpful pointers.

First, you will need to procure hosting. Fortunately, many inexpensive options are available:

Other options:

- Linode
- Amazon LightSail
- Digital Ocean
- Vultr

Foundry doesn't require many resources on the server side as most of the
    processing happens within the client's browser, so the typical $5/month (or lower) plan should be plenty. If you went with Linode, here is a
    tutorial
    you can follow to get your instance created and setup.


### Step 2 - Install Caddy

Caddy is a web server, similar to Nginx or Apache. However it focuses more on being able to easily setup an HTTPS Proxy. Recently version 2 of Caddy was released and so you will likely want to use that version. You can find instructions for installing it on the more popular distributions below. If you're using a something different, please follow the Caddy install guide.

This guide assumes a basic level of familiarity with the Linux operating
    system and how to interface with it. If you are brand new to Linux we recommend starting with
    a beginner's tutorial to the Linux command line before proceeding.


#### Ubuntu or Debian

```javascript
$ sudo apt install -y debian-keyring debian-archive-keyring apt-transport-https
$ curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/gpg.key' | sudo gpg --dearmor -o /usr/share/keyrings/caddy-stable-archive-keyring.gpg
$ curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/debian.deb.txt' | sudo tee /etc/apt/sources.list.d/caddy-stable.list
$ sudo apt update
$ sudo apt install caddy
```

`$ sudo apt install -y debian-keyring debian-archive-keyring apt-transport-https
$ curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/gpg.key' | sudo gpg --dearmor -o /usr/share/keyrings/caddy-stable-archive-keyring.gpg
$ curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/debian.deb.txt' | sudo tee /etc/apt/sources.list.d/caddy-stable.list
$ sudo apt update
$ sudo apt install caddy`
#### Fedora, Red Hat or CentOS 8

```javascript
$ dnf install 'dnf-command(copr)'
$ dnf copr enable @caddy/caddy
$ dnf install caddy
```

`$ dnf install 'dnf-command(copr)'
$ dnf copr enable @caddy/caddy
$ dnf install caddy`
#### Red Hat or CentOS 7

```javascript
$ yum install yum-plugin-copr
$ yum copr enable @caddy/caddy
$ yum install caddy
```

`$ yum install yum-plugin-copr
$ yum copr enable @caddy/caddy
$ yum install caddy`
### Step 3 - Configure Caddy

Caddy will come with a default configuration that will set it up as a simple web server. You'll need to update that configuration to use it as a reverse proxy.

Make sure to update the references to your.hostname.com in the
    configuration. Without a proper hostname, Caddy will fail to automatically install an SSL
    certificate from Let's Encrypt. If you don't have your own domain, you can use the
    dynamic hostname assigned by your hosting provider.

`your.hostname.com````javascript
# This replaces the existing content in /etc/caddy/Caddyfile

# A CONFIG SECTION FOR YOUR HOSTNAME
your.hostname.com {
    # PROXY ALL REQUEST TO PORT 30000
    reverse_proxy localhost:30000
}

# Refer to the Caddy docs for more information:
# https://caddyserver.com/docs/caddyfile
```

`# This replaces the existing content in /etc/caddy/Caddyfile

# A CONFIG SECTION FOR YOUR HOSTNAME
your.hostname.com {
    # PROXY ALL REQUEST TO PORT 30000
    reverse_proxy localhost:30000
}

# Refer to the Caddy docs for more information:
# https://caddyserver.com/docs/caddyfile`Once you have configured Caddy, there are some configurations for Foundry Virtual Tabletop in the Application Configuration article you will also want to apply. Set the following options in your Foundry VTT{userData}/Config/options.json file which will instruct Foundry that the server is running with a proxy server in front of it on port 443.

`{userData}/Config/options.json`Please be aware that if your Foundry VTT location is hosted at a subfolder location, such as mysite.com/foundryvtt, you will need to define a routePrefix as outlined in the Application Configuration article.

`mysite.com/foundryvtt``routePrefix````javascript
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
"proxySSL": true`Once you have configured your reverse proxy, you will want to restart the proxy instance as well as your Foundry VTT instance to ensure that the new settings are active.


### Step 4 — Caddy Administration

You can use the service utility to easily manage your Caddy server.

`service````javascript
# Check Status
sudo service caddy status

# Start Caddy
sudo service caddy start

# Stop Caddy
sudo service caddy stop

# Restart Caddy
sudo service caddy restart
```

`# Check Status
sudo service caddy status

# Start Caddy
sudo service caddy start

# Stop Caddy
sudo service caddy stop

# Restart Caddy
sudo service caddy restart`If you have followed these steps you should now be running an SSL reverse proxy redirecting traffic to Foundry VTT, enjoy!


### Serving Static Files via Proxy (Not Recommended)

Now that you have a proxy server available, it could be tempting to use it to serve static files instead of letting the Foundry VTT web server (express) handle this task like normal.

However, this is not a recommended approach. The performance benefits are extremely minimal, the complexity to set it up properly is significant, and the potential for problems outweighs any potential benefit.

Specifically, there is a high likelihood of configuring the proxy server in a way that serves Foundry's static files extremely incorrectly. Furthermore, Foundry VTT's internal logic that determines which static files to serve and where to serve them from may change from version to version without notice.


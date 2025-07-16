# S3 File Storage Integration | Foundry Virtual Tabletop

Source: https://foundryvtt.com/article/aws-s3/

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# S3 File Storage Integration


## 


## Overview

Foundry Virtual Tabletop features integrated support for S3 file storage solution, allowing you to use an AWS account and S3 buckets as a built-in, browseable file storage location for media assets. To enable this functionality, you must include an entry in your options.json config file which points towards another JSON file that contains your S3 authentication credentials. If such a file is correctly specified and the credentials provided have permission to access S3 buckets, those buckets will be available for use in the File Browser for any Foundry VTT users you grant permission to access it.

`options.json`Use of S3 integration in Foundry VTT is a great solution for users who are self-hosting on internet connections that have very limited upload speeds. When configured properly for S3 integration, FVTT will offer image, video, and audio assets directly from S3 to all connected users rather than having to use the host's internet connection.

Configuring AWS S3 integration is an advanced feature of Foundry VTT and requires technical configuration.

This article will introduce you to the concepts of:


### Requirements

This article assumes that you have already set up an S3 account through AWS or another S3 provider. It is written primarily with an eye toward AWS S3, though other providers can work assuming they provide an S3-compatible service compliant with AWS SDK 3.0. This article assumes you have already created an AWS account and that you already have an admin account for managing your AWS-S3.

After you have created an AWS account, you will need to perform some basic configuration of S3 to support Foundry VTT's usage of your S3 buckets. There are already a number of guides which cover the process of setting up an AWS account and configuring S3 in general, so this article will focus on the specific aspects of configuration related to Foundry VTT.


## Enabling S3 Integration

The rest of this article will provide instructions for how to set up and configure a S3 bucket, but for those of you who already have a S3 bucket set up let's skip ahead to how you configure Foundry Virtual Tabletop to integrate with AWS and S3.

Foundry Virtual Tabletop integrates with AWS using the Node.js library provided by Amazon. In order to configure your use of S3, Foundry VTT needs to be provided with an JSON configuration which can be stored as a file in the Config sub-folder of your User Data directory or embedded in-line as part of your options.json configuration file. The configuration data provided is used to authenticate with AWS and to customize other attributes of your integration, like your preferred region. The contents of an example AWS configuration is as follows

`options.json````javascript
{
  "buckets": ["your-bucket","your-other-bucket"], 
  "region": "YOUR_PREFERRED_REGION",
  "credentials": {
    "accessKeyId": "YOUR_ACCESS_KEY_ID",
    "secretAccessKey": "YOUR_SECRET_ACCESS_KEY"
  }
}
```

`{
  "buckets": ["your-bucket","your-other-bucket"], 
  "region": "YOUR_PREFERRED_REGION",
  "credentials": {
    "accessKeyId": "YOUR_ACCESS_KEY_ID",
    "secretAccessKey": "YOUR_SECRET_ACCESS_KEY"
  }
}`The AWS configuration file may also include other parameters which will be passed to the S3 client as described by the JavaScript SDK documentation including options to support a custom endpoint for integrating with other S3-compatible services.

`endpoint`The simplest way to integrate with AWS is by providing credentials directly in this JSON configuration, but for improved security we recommend omitting these credentials and instead using one of the more preferred methods supported by AWS.

The Foundry Virtual Tabletop software can be instructed to use this configuration by either saving it as a JSON file in the Config folder, for example {User Data}/Config/aws.json, or by including it in-line options.json configuration file. The aws field of the options.json file accepts either an in-line AWS configuration or a relative file path to a separate AWS configuration JSON file. If using a separate file with a path reference, this may be configured in the Setup menu of the Foundry Virtual Tabletop software.

`{User Data}/Config/aws.json``options.json``aws``options.json`
## Non-AWS Providers

Some other cloud hosting services, such as Digital Ocean, offer storage services that may also be Foundry-compatible.

Note that if you are using a non-AWS S3 service, the region is still required. This is used by the AWS SDK to determine how to build the payload type, and can be set to any valid AWS region, for example us-east-1. The region is not used, and no data is sent to AWS if an alternate endpoint is specified. Here is an example using DigitalOcean spaces in the nyc3 datacenter:

`region``us-east-1``endpoint``nyc3````javascript
{
  "region": "us-east-1",
  "endpoint": "https://nyc3.digitaloceanspaces.com",
  "credentials": {
    "accessKeyId": "SPACES_KEY",
    "secretAccessKey": "SPACES_SECRET"
  }
}
```

`{
  "region": "us-east-1",
  "endpoint": "https://nyc3.digitaloceanspaces.com",
  "credentials": {
    "accessKeyId": "SPACES_KEY",
    "secretAccessKey": "SPACES_SECRET"
  }
}`You can get more details from the Digital Ocean Spaces documentation, or the object storage documentation for your specific provider.


## Creating and Configuring an S3 Integration

The remainder of this article covers some more specialized topics intended to assist users with creating or configuring an S3 integration.


### Creating an S3 Bucket

Before you can store files in S3, you need to create and configure a bucket to work with.

Take care how you name your S3 Bucket. The bucket name can only contain lowercase letters, numbers, and dashes and must be globally unique across all AWS regions and accounts. Do not use . in the name as it will cause issues with HTTPS certificates, more info is provided here: AWS S3 VirtualHosting.

`.`- Click Services in the upper left hand corner.
- Under the "Storage" heading, choose "S3"
- From the S3 Console, Click "Create Bucket"
- Name your bucket and choose an appropriate region.
- Under Bucket settings for Block Public Access, uncheck Block all public access and acknowledge the risk.
- Click create bucket.
- On the Buckets dashboard of the S3 Console, select your bucket and click the "Copy ARN" button.
- Paste your ARN into a notepad, you will need it to complete JSON configuration files later.

Foundry VTT presently requires buckets to be public in order to function. You should not upload anything to these buckets which may be private or confidential as they will be accessible to anyone with the link.


### Configuring an S3 Bucket

Now that the S3 bucket has been created, some configuration changes are needed before it can be used.


#### Configuring a Bucket Policy

While the bucket may be set to public, the objects that we upload to it are not public by default. Thanks to a community guide, you can place the following json policy into your "Bucket Policy" configuration:

```javascript
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Action": "s3:GetObject",
            "Effect": "Allow",
            "Resource": "(YOUR_ARN_HERE)/*",
            "Principal": "*"
        }
    ]
}
```

`{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Action": "s3:GetObject",
            "Effect": "Allow",
            "Resource": "(YOUR_ARN_HERE)/*",
            "Principal": "*"
        }
    ]
}`Be sure to replace "(YOUR_ARN_HERE)" with the ARN you copied previously.


#### Enabling Cross-Origin Resource Sharing (CORS)

In order to use assets out of your S3 bucket from Foundry VTT you will need to set a CORS policy. To do this, navigate to the Permissions tab on the S3 bucket management panel. Under the Cross-origin resource sharing (CORS) section apply the following policy:

```javascript
[
    {
        "AllowedOrigins": ["*"],
        "AllowedHeaders": ["*"],
        "AllowedMethods": ["GET", "POST", "HEAD"],
        "ExposeHeaders": [],
        "MaxAgeSeconds": 3000
    }
]
```

`[
    {
        "AllowedOrigins": ["*"],
        "AllowedHeaders": ["*"],
        "AllowedMethods": ["GET", "POST", "HEAD"],
        "ExposeHeaders": [],
        "MaxAgeSeconds": 3000
    }
]`For more information, see the following AWS support page: https://docs.aws.amazon.com/AmazonS3/latest/user-guide/add-cors-configuration.html.


#### Restricting Bucket Permissions

You may not wish to allow your AWS account to access all S3 buckets from within Foundry VTT. Later in this article we will create a secondary user account to allow for that, but first you will need to configure a policy that will allow that user to interact with your S3 bucket.


#### Creating an IAM Policy

From your AWS Management Console:

- Click Services in the upper left hand corner
- Under the "Security, Identity & Compliance" heading choose "IAM"
- On the AWS Identity and Access Management (IAM) page, choose Policies from the left-hand menu
- Click Create Policy
- Click the JSON tab
- Copy the policy JSON from below and paste it into this tab
- Click next and skip the tags section to reach "Review", where you will assign this policy an easy-to-find name such as FVTT-s3-access
- Click "Create Policy"

Example S3 Access Policy

```javascript
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "VisualEditor0",
            "Effect": "Allow",
            "Action": [
                "s3:PutObject",
                "s3:GetObject",
                "s3:ListBucket",
                "s3:DeleteObject",
                "s3:PutObjectAcl"
            ],
            "Resource": [
                "(YOUR_ARN_HERE)/*",
                "(YOUR_ARN_HERE)"
            ]
        },
        {
            "Sid": "VisualEditor1",
            "Effect": "Allow",
            "Action": "s3:ListAllMyBuckets",
            "Resource": "*"
        }
    ]
}
```

`{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "VisualEditor0",
            "Effect": "Allow",
            "Action": [
                "s3:PutObject",
                "s3:GetObject",
                "s3:ListBucket",
                "s3:DeleteObject",
                "s3:PutObjectAcl"
            ],
            "Resource": [
                "(YOUR_ARN_HERE)/*",
                "(YOUR_ARN_HERE)"
            ]
        },
        {
            "Sid": "VisualEditor1",
            "Effect": "Allow",
            "Action": "s3:ListAllMyBuckets",
            "Resource": "*"
        }
    ]
}`Be sure to replace "(YOUR_ARN_HERE)" with the ARN you copied previously.

This policy allows the AWS user to:

- List all available buckets (but not their contents)
- List the contents of specific buckets it is allowed to access
- Read and write objects from the defined buckets it is allowed to access

Your policy can be modified to allow access to a different set of buckets depending on your use case and needs.


### Allowing User Access

If you wish for your players or co-GMs to be able to access the contents of your S3 buckets through FVTT, simply configuring access to the file browser and to allow uploads should be sufficient assuming you have configured the bucket permissions in accordance with the above configuration.

The permission controls on your AWS bucket are used to restrict the ability to upload content only. To use uploaded content in a game session, all players must have access to read the files in your bucket. You can either accomplish this by making your entire bucket public access (as we have done above), specifically assigning a public-read ACL to each uploaded key (Uploading using Foundry VTT does this automatically assuming you have configured the policies as above), or by specifically authorizing individual IP addresses of your players for the bucket (advanced, requiring knowledge of your users IP addresses).

For more information, see the following AWS support page: https://aws.amazon.com/premiumsupport/knowledge-center/s3-console-access-certain-bucket/


#### Creating an S3 Sub-account

Now that you have created an S3 bucket and configured the necessary permissions, you will need a sub-account for the actual setup and management of your S3 buckets. It is better to configure this secondary account with less permissions than your primary S3 account for the purposes of maintaining your S3 buckets through Foundry Virtual Tabletop.

From your AWS Management Console:

- Click Services in the upper left hand corner
- Under the "Security, Identity & Compliance" heading choose "IAM"
- On the AWS Identity and Access Management (IAM) page, choose users from the left-hand menu
- Choose "Add User"
- Enter a username of your choosing
- Choose to give this user programmatic access and ensure AWS Management Console access is disabled.
- Assign the IAM Policy you created in the permissions section of this article.
- On the "Success" screen, choose to download the CSV. This contains the credentials you'll need for your FVTT S3 configuration.

If you lose your csv credential file you will need to reset the credentials by performing this process again. There is no way to recover the existing credentials.


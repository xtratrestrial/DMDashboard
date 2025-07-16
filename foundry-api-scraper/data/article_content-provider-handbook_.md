# Content Provider Handbook | Foundry Virtual Tabletop

Source: https://foundryvtt.com/article/content-provider-handbook/

This website collects anonymous data about how users interact with our website. This data provides us with 
        valuable insights that help us to improve our products. Some of these analytics features are non-essential 
        and use browser cookies.

What data we collect and information on how it is used is described in our 
        Privacy Policy.


# Content Provider Handbook


## 


## What is a Content Provider?

A Content Provider is a group of users that can manage your Modules. You can add as many users as you'd like and each one can be limited to doing certain things. For example, you can give your customer service agents the ability to generate and revoke Content Keys, your developers can upload new versions of a Module and edit their descriptions, and you can even make sure your accountant can get and manage invoices from Foundry VTT automatically. If you have an assistant who handles all of that for you, you can also give them the ability to handle all of those tasks by themselves.


## Accessing Your Content Provider

Once you're logged in on the Foundry VTT website you can find all of the Content Providers that you're a member of here. If you have permissions to edit a Content Provider an Edit button will be available in the far-right next to your role.


## Managing Your Content Provider

If you have permissions to edit a Content Provider an Edit button will be available in the far-right next to your role. Once you've accessed your Content Provider you'll be able to update the following:

- The display name that people see on your Module pages
- The description that people see on your Content Provider page
- The logo that's visible on your Content Provider page
- Any users that you've added to your Content Provider

You'll also be able to access your Foundry VTT secret key, OneBookShelf Authorization key, and see how many content keys you can generate at a time.


### How to Add/Edit a User

- At the bottom of your Content Provider page press the Add User button or the Edit button next to their name to edit an existing user.
- Enter the username of the person you would like to add.
- Check each of the roles that they should have.
- Press Save Changes.

`Add User``Edit``Save Changes`
#### User Roles

All of the available roles and what they can do are broken down below:


## Helpful Content Provider Tools


### Premium Module Submission Form

When you have a new premium Module to submit you can use our submission form to create the Package page for it. While filling out the form just make sure that you check the Is this Protected Content? box and choose your your provider in the Content Provider field. This will ensure that the Module is marked as premium content and is associated with your Content Provider. The Module will still be in a pending state for us to approve and will not appear to users. Once you've submitted the module you can also upload the Module to our server using the uploader below.

`pending`
### Premium Content Uploader

Make sure that your module.json is configured correctly. Then, just zip up your module and upload it using our Upload Tool. Once it's successfully uploaded it will handle all of the other technical bits!

`module.json`The uploader will let you know if there are any issues and either you or your developer can make a change to fix it and re-upload. If you're not sure what's happening feel free to reach out to us.


### Generate Content Keys

Content providers who have signed a Premium Content Agreement with us can access our key generator to create a pool of sellable public keys and internal testing and promotional keys. Here's how the tool works:

- Select the package you'd like to generate keys for from the Package dropdown.
- Enter the number of public sellable keys you would like to generate in the Keys field.
- Enter the number of test/promotional keys you would like to generate in the Internal Keys field.
- Press the Generate Keys button.

The tool will generate a CSV file for each type of key containing the generated pool which you can then send out to backers, add to a webstore, or give to employees for internal use.

You will only be able to generate Content Keys for a Module that has 25% or less of its key pool remaining. If you need additional keys for something like a Kickstarter please reach out to us.


### Revoke Content Keys

If you're not using our API to automatically revoke Content Keys after a refund we have an easy to use Key Revoker. Here's how to use it:

- While logged in, go to the Key Revoker.
- Enter the key you wish to revoke. We only support revoking one key at a time currently.
By default, if you attempt to revoke a key that is already active, it will display an error message informing you that the key has already been used. If you would like to revoke an active key you can check the Revoke Active Key checkbox and it will override the restriction.
- Once a key is revoked successfully, you should see a confirmation message at the top of the screen.
- Repeat the process as needed for any additional keys that you need to revoke.

Enter the key you wish to revoke. We only support revoking one key at a time currently.

By default, if you attempt to revoke a key that is already active, it will display an error message informing you that the key has already been used. If you would like to revoke an active key you can check the Revoke Active Key checkbox and it will override the restriction.


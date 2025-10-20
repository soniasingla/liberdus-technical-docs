---
sidebar_position: 5
---

# How to Install and Run a Liberdus Validator Node

This guide will walk you through the process of installing and running a Liberdus Validator Node on your system. Please follow the steps below carefully.

## Hardware Requirements

To operate a Liberdus Validator Node reliably, your server should meet at least the following specifications:

- CPU: 2 cores (dedicated or virtual)
- Memory: 2 GB RAM
- Storage: 256 GB SSD
- Network: 1 Gbps connection with a minimum of 1 TB monthly bandwidth
- Security & Reliability: DDoS protection, power backup, and redundant Internet connectivity

> 💡 A VPS meeting these requirements is typically available for under $30/month from most reputable hosting providers.

Although it is technically possible to run a validator node from home, doing so is not recommended. Residential connections often lack power redundancy and stable Internet access, increasing the risk of downtime and potential penalties for node unavailability.

## OS Requirements

Currently, the Liberdus Validator Node supports only Linux. The latest Ubuntu LTS release is strongly recommended.

## Installing Docker

Do the following as root or a sudo-privilaged user:

1. Install Package Manager Utilities

```bash
sudo apt-get install curl
```

2. Update System Packages

```bash
sudo apt update
```

3. Install Docker

Install docker using the `docker.io` package

```bash
sudo apt install docker.io
```

Verify the installation

```bash
sudo docker --version
```

> You should see Docker version 20.10.12 or higher.

4. Install Docker Compose

```bash
sudo apt install docker-compose
```

Verify Docker Compose installation

```bash
sudo docker-compose --version
```

> You should see Docker Compose version 1.29.2 or higher.

## Create a Liberdus User

Do the following as root or a sudo user to create a Liberdus user that will install and run the node:

```bash
sudo adduser liberdus
sudo usermod -aG sudo liberdus
su liberdus
cd
```

## Downloading and Running the Installation Script

Run the following commands as the liberdus user (not as root):

```bash
curl -O https://raw.githubusercontent.com/liberdus/validator-dashboard/main/installer.sh && chmod +x installer.sh && ./installer.sh
```

Follow the instructions provided by the installer script. You can just hit the enter button to accept the default values which should work for most cases.

> If you are behind a router and you are using ports 9001 and 10001 for p2p communication, make sure ports 9001 and 10001, are forwarded (be cautious when doing this since it will modify your firewall). More info on router port forwarding: [https://www.noip.com/support/knowledgebase/general-port-forwarding-guide/](https://www.noip.com/support/knowledgebase/general-port-forwarding-guide/)

## Starting the Validator

After the installation process completes, you can start the validator using either the web-based dashboard or the command line:

### Option 1: Web Dashboard

- Open a web browser and navigate to the web dashboard at `https://localhost:8080` or `https://ServerIP:8080`
- Enter the password you set during the installation process.
- Select the **testnet** network from the drop down menu; developer can also select devnet, or localnet.
- Click the `Start Node` button to launch your validator node.

### Option 2: Command Line

- Open a terminal and navigate to the Liberdus home directory (`$HOME/.liberdus`).
- Enter the validator container with `./shell`.
- In the container, run `operator-cli start` to start the validator node.
- Run `operator-cli status` to check that it is running.
- Run `operator-cli -h` for list of commands.

### Stake LIB

Once your validator node is running, you can proceed with staking LIB to your node.

1. In the web dashboard, once logged in, you will see your **node address** and a **QR code** for your node address.
2. Open the [Liberdus wallet](https://liberdus.com/download/).
   - If this is your first time using the Liberdus Wallet, create an account by providing a username.
3. Select the **Validator** option in the menu.
4. Click the **Stake** button and copy-paste your node address from the dashboard.
   - If you’re using a phone, you can scan the QR code shown on the dashboard.
5. If you don't have at least **1250 LIB**. you can get some by clicking the **Claim** button.
6. Wait about 15 seconds for the LIB to appear in your wallet. Click the **Submit Stake** button to complete the staking process.

After staking, the Web Dashboard will show your staked amount (**1250 LIB or more**) and your node status will update to `Standby` shortly afterward. This indicates that your validator node is set up correctly. The network will then automatically add your validator to the active set based on network load and available validator slots.

## Stopping the Validator

### Gracefully stopping the node

Never forse stop your node if it is participating in the network as this will trigger a penalty on the stake amount.

Always gracefully stop the node.

1. In the validator dashboard, click the **Settings** icon.
2. Uncheck the option for **Auto Restart Node** so that it does not join the network again after it is rotated out.
3. Watch the dashboard to see when your node has stopped.

### Unstake LIB with Reward

Once your validator node is stopped, you can proceed with withdrawing the staking and reward from your node.

1. Open the [Liberdus wallet](https://liberdus.com/download/).
   - Sign In to the same account that you used when staking.
2. Select the **Validator** option in the menu.
3. Click the **Unstake** button and confirm that you want to unstake.
   - If your node is still active or recently stopped you will need to wait before you can unstake.
4. Wait about 15 seconds to get back the staked LIB and reward.
5. If your node was penalized you will get back less than what you staked. Check the validator dashboard for penalty reasons.

## Notification of Software updates

As a node operator it is your responsibility to update the node software when there are new releases. If you do not update the node software, your node will not be allowed to join the network.

There are 3 ways you can be nofied of updates.

1. The validator dashboard will show a message if you need to update the node software version.
2. You can also subscribe to the node operators mailing list here `https://groups.google.com/g/liberdus-node-operators` to get announcements.
3. you can also check the node operators announcement channel in the Liberdus Discord to be notified of software updates.

### Update the software

Just run the installer script again to update the validator node software.
Do the following as the user that was created earlier and not as root.

```bash
curl -O https://raw.githubusercontent.com/liberdus/validator-dashboard/main/installer.sh && chmod +x installer.sh && ./installer.sh
```

Follow the instructions provided by the installer script. You can just hit the enter button to accept the default values which should work for most cases.

## Docker management

In most cases you don't need to manage the docker images manually, but the following scripts are provided to make it easier if you do. These should be run as the user that was created during the setup and not as root.

### Start the docker images

```bash
cd .liberdus
./docker-up.sh
```

This will be more effective when the info gathered in the install script is stored in persisent volume that is mounted by the container.

### Stop the docker images

```bash
cd .liberdus
./docker-down.sh
```

### Clean up

```bash
cd .liberdus
./clean.sh
```

This will clean up the last (latest) build. Just meant to save a few key strokes.

### Conclusion

Your Liberdus Validator Node should now be fully operational and ready to participate in the network. Regularly monitor your node’s performance and stay updated with the latest software releases to maintain uptime and avoid penalties.

# Next.js Dashboard - Homelab Deployment 🚀

This project is built upon the starter template from the [Next.js App Router Course](https://nextjs.org/learn). However, instead of using standard cloud deployment platforms like Vercel, this application is entirely **self-hosted** on a personal homelab infrastructure to demonstrate end-to-end DevOps and system administration capabilities.

**Live Demo:** [https://nextjs-dashboard.ghujinstudio.my.id](https://nextjs-dashboard.ghujinstudio.my.id)

Please use following credentials:

**Email**
```
user@nextmail.com
```
**Password**
```
123456
```

## 🏗️ Infrastructure & CI/CD Pipeline

This project goes beyond frontend development by implementing a robust self-hosted infrastructure and a CI/CD pipeline. The following technologies were utilized:

* **Docker:** The application and its dependencies are containerized to ensure a consistent, isolated, and reproducible environment across the homelab server.
* **Jenkins (CI):** The repository is integrated with a Continuous Integration pipeline using Jenkins to automate the build processes and ensure code reliability.
* **Self-hosted Database:** The application's database is provisioned and managed locally within the homelab network, entirely independent of third-party managed database services.
* **Cloudflare Tunnel:** Utilized to securely expose the local homelab services to the public internet. This provides secure HTTPS access on a custom domain without the need to expose public IP addresses or configure port forwarding on the local router.

## 💻 Tech Stack

**Frontend & Application Logic:**
* Next.js (App Router)
* React.js
* Tailwind CSS

**DevOps & Infrastructure:**
* Docker
* Jenkins
* Cloudflare Zero Trust (Tunnels)
* Self-hosted Database (PostgreSQL)

## 📚 About the Original Course

The foundational source code for this dashboard application originates from the official Next.js tutorial. For more information on the original curriculum and to learn how to build the base application, visit the [Next.js Website](https://nextjs.org/learn).

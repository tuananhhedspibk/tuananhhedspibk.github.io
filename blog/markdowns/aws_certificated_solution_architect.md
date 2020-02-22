# AWS Certificated Solution Architect

Nội dung tham khảo từ [khoá học](https://www.udemy.com/course/aws-certified-solutions-architect-associate/)

## IAM

Key terminology:
- Users
- Groups
- Policies
- Roles

> IAM is a universal namespace --> its name must be unique globally

MFA: Multi factor authentication

<img width="720" src="https://user-images.githubusercontent.com/15076665/69901876-ab828280-13ca-11ea-99db-dc9016604eef.png">

<img width="720" src="https://user-images.githubusercontent.com/15076665/69901881-c1904300-13ca-11ea-9964-90eeef233c9a.png">

## S3

In S3 files are storaged in Buckets and Bucket is just a folder, the folder was used to store files

> S3 is a universal namespace --> its name must be unique globally

<img width="720" src="https://user-images.githubusercontent.com/15076665/69909623-15d60a00-1441-11ea-8260-df1dedf45d96.png">

<img width="720" src="https://user-images.githubusercontent.com/15076665/69909654-c47a4a80-1441-11ea-8827-9f07ad9739f2.png">

<img width="720" src="https://user-images.githubusercontent.com/15076665/69909683-47030a00-1442-11ea-9992-cfd8c6f9f4c1.png">

### S3 types:
1. S3 standard
2. S3 - IA (Infrequently Accessed)
3. S3 One Zone - IA
4. S3 - Intelligent Tiering: use Machine Learning, based on your frequently access with objects, it will move objects around the different storage classes
5. S3 Glacier
6. S3 Glacier Deep Archive

<img width="720" src="https://user-images.githubusercontent.com/15076665/69910616-a4eb1e00-1451-11ea-8fbf-6b7e7f06d7b6.png">

<img width="720" src="https://user-images.githubusercontent.com/15076665/69910626-e54a9c00-1451-11ea-8b06-2329799afa93.png">

<img width="720" src="https://user-images.githubusercontent.com/15076665/69910640-1e830c00-1452-11ea-8dba-71915a51265b.png">

### S3 Encryption and Security

S3 Managed keys - SSE - S3 will manage your S3 objects key, you don't have to care about it at all (key is just a way of encrypting the object and then decrypting it)

<img width="720" src="https://user-images.githubusercontent.com/15076665/75085280-eda30680-556a-11ea-9f41-a35b85659f86.png">

### S3 Version control

When upload a new file, it's permission will be changed, you can't access it.

After deleting a file, it will be marked by "Delete marker" to show you that, the file had been deleted.

If we delete that "Delete marker", we can restore our "deleted" file

==> GREAT Backup tool

### Cross Region Replication

Create a replication for your S3 bucket in another Region

If you put a "delete marker" for an object of original bucket, it's not going to replicate the "delete marker"

<img width="720" src="https://user-images.githubusercontent.com/15076665/75085963-fea34600-5571-11ea-8efc-60636d877073.png">

### S3 Transfer Acceleration

Instead upload an object directly to the S3 bucket, you can use a distinct URL to upload to an edge location which will then transfer that file to S3

<img width="720" src="https://user-images.githubusercontent.com/15076665/75086117-dd435980-5573-11ea-9c51-8a3c9c3a11f8.png">

### EC2

Web services that provide resizable compute capacity

Root volume type of EC2 can only launch on GP2 or Magnetic (Standard)

<img width="230" src="https://user-images.githubusercontent.com/15076665/75091995-b1959300-55b6-11ea-92b3-139f920fbbf7.png">

**HTTP** is going to **port 80**, **SSH** is going to **port 22**

With address **0.0.0.0/0** means that you are opening to the whole world.

```shell
$yum update -y # for our OS's update in EC2
```

We need to install **Apache** to turn our EC2 to a web-server

```shell
$chkconfig on # start httpd service if our EC2 meets an acident and reboot, we don't have to manually go and turn it on
```

### CloudFront

- Edge Location: The location where content will be cached (separate to an AWS region) - we can both read and write to edge location
- Origin: origin of all the files (can be S3 object, EC2 instance)
- Distribution: the name given to the CDN

With CloudFront all requests for your content are automatically routed to the nearest edge location

- Web distribution
- RTMP: Used for media streaming

Our object are cached for the life of the TTL (Time To Live)

Create Invalidation of CloudFront means: you makes your S3 objects that no longer going to be on the edge location

### DNS 101

DNS is actually on the port 53 -- Route 53 get this name
DNS is used to convert human friendly domain names into an IP address

Ex: https://google.com ===> https://82.124.53.1

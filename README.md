# Sandbox Serverless Lambda Integration

## Offline

### Sync

```shell
$ curl -i http://localhost:3000/dev/sync
HTTP/1.1 400 Bad Request
content-type: application/json; charset=utf-8
cache-control: no-cache
content-length: 17
Date: Tue, 18 May 2021 02:59:18 GMT
Connection: keep-alive
Keep-Alive: timeout=5

{"success":false}
```

```shell
$ curl -i http://localhost:3000/dev/sync\?success\=true
HTTP/1.1 200 OK
content-type: application/json; charset=utf-8
cache-control: no-cache
content-length: 16
accept-ranges: bytes
Date: Tue, 18 May 2021 02:59:26 GMT
Connection: keep-alive
Keep-Alive: timeout=5

{"success":true}
```

### Async

```shell
$ curl -i http://localhost:3000/dev/async
HTTP/1.1 400 Bad Request
content-type: application/json; charset=utf-8
cache-control: no-cache
content-length: 17
Date: Tue, 18 May 2021 02:59:58 GMT
Connection: keep-alive
Keep-Alive: timeout=5

{"success":false}
```

```shell
$ curl -i http://localhost:3000/dev/async\?success\=true
HTTP/1.1 200 OK
content-type: application/json; charset=utf-8
cache-control: no-cache
content-length: 16
accept-ranges: bytes
Date: Tue, 18 May 2021 02:59:33 GMT
Connection: keep-alive
Keep-Alive: timeout=5

{"success":true}
```

## Online

### Sync

```shell
curl -i  https://xxxxx.execute-api.ap-northeast-1.amazonaws.com/dev/sync
HTTP/2 400 
content-type: application/json
content-length: 17
date: Tue, 18 May 2021 03:03:31 GMT
x-amzn-requestid: b71525e9-31e3-4c1b-bfe4-7e8576d23d52
x-amz-apigw-id: fgQ0cH83NjMFqTg=
x-amzn-trace-id: Root=1-60a32e82-6a98577e23101a5d6e8377f5;Sampled=0
x-cache: Error from cloudfront
via: 1.1 4282107b43c6547bd498baa733c53e85.cloudfront.net (CloudFront)
x-amz-cf-pop: KIX56-C2
x-amz-cf-id: 5odqSyWCFuIfMmAhaKVK_xP-Mgwqv_5koFaM9gk6LqXKwBoA7HdyeA==

{"success":false}
```

```shell
curl -i  https://xxxxx.execute-api.ap-northeast-1.amazonaws.com/dev/sync\?success\=true
HTTP/2 200 
content-type: application/json
content-length: 16
date: Tue, 18 May 2021 03:03:58 GMT
x-amzn-requestid: 45e86641-4fa6-4106-87c1-8cff059812a2
x-amz-apigw-id: fgQ4uGEutjMFn3w=
x-amzn-trace-id: Root=1-60a32e9e-74afc07944c55f94698f18ab;Sampled=0
x-cache: Miss from cloudfront
via: 1.1 d3057b11e6778612a26c26726588813a.cloudfront.net (CloudFront)
x-amz-cf-pop: KIX56-C2
x-amz-cf-id: Iw5atHqT9oxW0hFcfGxt9PCPDPRxG04xYRbWq9kiTpsuG9E7pl8M6g==

{"success":true}
```

### Async

```shell
curl -i  https://xxxxx.execute-api.ap-northeast-1.amazonaws.com/dev/async
HTTP/2 400 
content-type: application/json
content-length: 17
date: Tue, 18 May 2021 03:04:19 GMT
x-amzn-requestid: a9152c0b-2d5e-4abe-bcbd-0b7303020682
x-amz-apigw-id: fgQ8DHfZtjMFoAg=
x-amzn-trace-id: Root=1-60a32eb3-437b49e07ac20c0f4731b9b5;Sampled=0
x-cache: Error from cloudfront
via: 1.1 3f25aaaea08c3e2d0f83dbd448ed6058.cloudfront.net (CloudFront)
x-amz-cf-pop: KIX56-C2
x-amz-cf-id: Wuow1jFwQ_YD9yCVd00jhbnX724TDhiF8knCU3BrhfoMUgyoYSBQEA==

{"success":false}
```  

```shell
curl -i  https://xxxxx.execute-api.ap-northeast-1.amazonaws.com/dev/async\?success\=true
HTTP/2 200 
content-type: application/json
content-length: 16
date: Tue, 18 May 2021 03:04:43 GMT
x-amzn-requestid: 46fc54ec-4506-4d01-94cb-51b573e29c10
x-amz-apigw-id: fgQ_vGxSNjMFsag=
x-amzn-trace-id: Root=1-60a32ecb-67602d133e861a3a351837fc;Sampled=0
x-cache: Miss from cloudfront
via: 1.1 327099f8c71c2f04d0d0f24eecb3c681.cloudfront.net (CloudFront)
x-amz-cf-pop: KIX56-C2
x-amz-cf-id: LaXm1fJsol3MAY8u4Fp60MzU-82caWnBFW_opvxEFRAqVA4UzUYVxg==

{"success":true}
```
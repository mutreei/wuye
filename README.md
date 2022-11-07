# wuye
物业系统 用户/管理
# 物业



<!--- If we have only one group/collection, then no need for the "ungrouped" heading -->



## Endpoints

* [用户操作](#)
  1. [注册](#1-)
  1. [登录](#2-)
  1. [充值/消费](#3-)
  1. [查询所有用户](#4-)
  1. [销毁账户](#5-)
* [车位操作](#)
  1. [购买车位](#1--1)
  1. [出售车位](#2--1)
  1. [查询名下车位](#3--1)
  1. [查询无主车位](#4--1)
* [公寓操作](#)
  1. [入住公寓](#1--2)
  1. [离开公寓](#2--2)
  1. [查询公寓](#3--2)
  1. [查询无主公寓](#4--2)
* [车辆操作](#)
  1. [添加车辆信息](#1--3)
  1. [删除车辆信息](#2--3)
  1. [查询车辆信息](#3--3)
* [费用操作](#)
  1. [缴费](#1--4)
  1. [查询个人消费信息](#2--4)
  1. [查询所有记录信息](#3--4)

--------



## 用户操作



### 1. 注册



***Endpoint:***

```bash
Method: POST
Type: URLENCODED
URL: http://localhost:3001/register
```



***Body:***


| Key      | Value | Description |
| -------- | ----- | ----------- |
| userName | admin |             |
| password | admin |             |
| rights   | admin |             |



### 2. 登录



***Endpoint:***

```bash
Method: POST
Type: URLENCODED
URL: http://localhost:3001/login
```



***Body:***


| Key      | Value | Description |
| -------- | ----- | ----------- |
| userName | owner |             |
| password | owner |             |



### 3. 充值/消费



***Endpoint:***

```bash
Method: POST
Type: URLENCODED
URL: http://localhost:3001/recharge
```


***Headers:***

| Key           | Value                                                        | Description |
| ------------- | ------------------------------------------------------------ | ----------- |
| Authorization | Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiIwMDAwMDAwMDE1IiwibmFtZSI6ImFkbWluIiwicmlnaHRzIjoiYWRtaW4iLCJpYXQiOjE2NjMxNTI0NDgsImV4cCI6MTY2MzMyNTI0OH0.B-Yb9d8erfhm5Hdd4O3EHmio71eoYowqdqt_J29SQ2E |             |



***Body:***


| Key  | Value | Description |
| ---- | ----- | ----------- |
| size | 100   |             |



### 4. 查询所有用户



***Endpoint:***

```bash
Method: POST
Type: URLENCODED
URL: http://localhost:3001/findAllUser
```


***Headers:***

| Key           | Value                                                        | Description |
| ------------- | ------------------------------------------------------------ | ----------- |
| Authorization | Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiIwMDAwMDAwMDE1IiwibmFtZSI6ImFkbWluIiwicmlnaHRzIjoiYWRtaW4iLCJpYXQiOjE2NjMyMjQ0NjEsImV4cCI6MTY2MzM5NzI2MX0.9SlWWmm91-KzXDqHmGye9CgYBm-LB4QJL5tBj4mv4Ns |             |



***Body:***



### 5. 销毁账户



***Endpoint:***

```bash
Method: POST
Type: URLENCODED
URL: http://localhost:3001/destroyUser
```


***Headers:***

| Key           | Value                                                        | Description |
| ------------- | ------------------------------------------------------------ | ----------- |
| Authorization | Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiIwMDAwMDAwMDE1IiwibmFtZSI6ImFkbWluIiwicmlnaHRzIjoiYWRtaW4iLCJpYXQiOjE2NjMyMjQ0NjEsImV4cCI6MTY2MzM5NzI2MX0.9SlWWmm91-KzXDqHmGye9CgYBm-LB4QJL5tBj4mv4Ns |             |



***Body:***



## 车位操作



### 1. 购买车位



***Endpoint:***

```bash
Method: POST
Type: URLENCODED
URL: http://localhost:3001/buyParking
```


***Headers:***

| Key           | Value                                                        | Description |
| ------------- | ------------------------------------------------------------ | ----------- |
| Authorization | Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiIwMDAwMDAwMDE2IiwibmFtZSI6Im93bmVyIiwicmlnaHRzIjoib3duZXIiLCJpYXQiOjE2NjM1Njc2MDMsImV4cCI6MTY2Mzc0MDQwM30.n-XETIENrMynG0-Q6cV-BE2yCnMcSu_hc5j3_9m7wLs |             |



***Body:***


| Key       | Value                                | Description |
| --------- | ------------------------------------ | ----------- |
| parkingID | 8248e706-6b2a-4265-b32b-df82693aa55f |             |



### 2. 出售车位



***Endpoint:***

```bash
Method: POST
Type: URLENCODED
URL: http://localhost:3001/sellParking
```


***Headers:***

| Key           | Value                                                        | Description |
| ------------- | ------------------------------------------------------------ | ----------- |
| Authorization | Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiIwMDAwMDAwMDE2IiwibmFtZSI6Im93bmVyIiwicmlnaHRzIjoib3duZXIiLCJpYXQiOjE2NjM1Njc2MDMsImV4cCI6MTY2Mzc0MDQwM30.n-XETIENrMynG0-Q6cV-BE2yCnMcSu_hc5j3_9m7wLs |             |



***Body:***


| Key       | Value                                | Description |
| --------- | ------------------------------------ | ----------- |
| parkingID | 8248e706-6b2a-4265-b32b-df82693aa55f |             |



### 3. 查询名下车位



***Endpoint:***

```bash
Method: POST
Type: URLENCODED
URL: http://localhost:3001/queryParking
```


***Headers:***

| Key           | Value                                                        | Description |
| ------------- | ------------------------------------------------------------ | ----------- |
| Authorization | Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiIwMDAwMDAwMDE2IiwibmFtZSI6Im93bmVyIiwicmlnaHRzIjoib3duZXIiLCJpYXQiOjE2NjM1Njc2MDMsImV4cCI6MTY2Mzc0MDQwM30.n-XETIENrMynG0-Q6cV-BE2yCnMcSu_hc5j3_9m7wLs |             |



***Body:***



### 4. 查询无主车位



***Endpoint:***

```bash
Method: POST
Type: 
URL: http://localhost:3001/queryParkingIFnull
```


***Headers:***

| Key           | Value                                                        | Description |
| ------------- | ------------------------------------------------------------ | ----------- |
| Authorization | Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiIwMDAwMDAwMDE2IiwibmFtZSI6Im93bmVyIiwicmlnaHRzIjoib3duZXIiLCJpYXQiOjE2NjM1Njc2MDMsImV4cCI6MTY2Mzc0MDQwM30.n-XETIENrMynG0-Q6cV-BE2yCnMcSu_hc5j3_9m7wLs |             |



## 公寓操作



### 1. 入住公寓



***Endpoint:***

```bash
Method: POST
Type: URLENCODED
URL: http://localhost:3001/enterDepartment
```


***Headers:***

| Key           | Value                                                        | Description |
| ------------- | ------------------------------------------------------------ | ----------- |
| Authorization | Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiIwMDAwMDAwMDE2IiwibmFtZSI6Im93bmVyIiwicmlnaHRzIjoib3duZXIiLCJpYXQiOjE2NjQxNzQxMzksImV4cCI6MTY2NDM0NjkzOX0.s1O7gPMBYnpC7sZCh09nD5QOWd190N8GkX-ZQ6OLV1A |             |



***Body:***


| Key   | Value                                | Description |
| ----- | ------------------------------------ | ----------- |
| depID | 05a2cd05-546e-480a-94f3-8386420a37ac |             |



### 2. 离开公寓



***Endpoint:***

```bash
Method: POST
Type: URLENCODED
URL: http://localhost:3001/leaveDepartment
```


***Headers:***

| Key           | Value                                                        | Description |
| ------------- | ------------------------------------------------------------ | ----------- |
| Authorization | Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiIwMDAwMDAwMDE2IiwibmFtZSI6Im93bmVyIiwicmlnaHRzIjoib3duZXIiLCJpYXQiOjE2NjM1Njc2MDMsImV4cCI6MTY2Mzc0MDQwM30.n-XETIENrMynG0-Q6cV-BE2yCnMcSu_hc5j3_9m7wLs |             |



***Body:***


| Key   | Value                                | Description |
| ----- | ------------------------------------ | ----------- |
| depID | 038093e6-6453-4070-bd04-32131429ac0c | 公寓id      |



### 3. 查询公寓



***Endpoint:***

```bash
Method: POST
Type: URLENCODED
URL: http://localhost:3001/queryDepartment
```


***Headers:***

| Key           | Value                                                        | Description |
| ------------- | ------------------------------------------------------------ | ----------- |
| Authorization | Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiIwMDAwMDAwMDE2IiwibmFtZSI6Im93bmVyIiwicmlnaHRzIjoib3duZXIiLCJpYXQiOjE2NjM1Njc2MDMsImV4cCI6MTY2Mzc0MDQwM30.n-XETIENrMynG0-Q6cV-BE2yCnMcSu_hc5j3_9m7wLs |             |



***Body:***



### 4. 查询无主公寓



***Endpoint:***

```bash
Method: POST
Type: 
URL: http://localhost:3001/queryDepIFnull
```


***Headers:***

| Key           | Value                                                        | Description |
| ------------- | ------------------------------------------------------------ | ----------- |
| Authorization | Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiIwMDAwMDAwMDE2IiwibmFtZSI6Im93bmVyIiwicmlnaHRzIjoib3duZXIiLCJpYXQiOjE2NjM1Njc2MDMsImV4cCI6MTY2Mzc0MDQwM30.n-XETIENrMynG0-Q6cV-BE2yCnMcSu_hc5j3_9m7wLs |             |



## 车辆操作



### 1. 添加车辆信息



***Endpoint:***

```bash
Method: POST
Type: URLENCODED
URL: http://localhost:3001/buyCar
```


***Headers:***

| Key           | Value                                                        | Description |
| ------------- | ------------------------------------------------------------ | ----------- |
| Authorization | Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiIwMDAwMDAwMDE2IiwibmFtZSI6Im93bmVyIiwicmlnaHRzIjoib3duZXIiLCJpYXQiOjE2NjQxNzQxMzksImV4cCI6MTY2NDM0NjkzOX0.s1O7gPMBYnpC7sZCh09nD5QOWd190N8GkX-ZQ6OLV1A |             |



***Body:***


| Key   | Value  | Description |
| ----- | ------ | ----------- |
| plate | 123123 |             |



### 2. 删除车辆信息



***Endpoint:***

```bash
Method: POST
Type: URLENCODED
URL: http://localhost:3001/sellCar
```


***Headers:***

| Key           | Value                                                        | Description |
| ------------- | ------------------------------------------------------------ | ----------- |
| Authorization | Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiIwMDAwMDAwMDE2IiwibmFtZSI6Im93bmVyIiwicmlnaHRzIjoib3duZXIiLCJpYXQiOjE2NjQxNzQxMzksImV4cCI6MTY2NDM0NjkzOX0.s1O7gPMBYnpC7sZCh09nD5QOWd190N8GkX-ZQ6OLV1A |             |



***Body:***


| Key   | Value  | Description |
| ----- | ------ | ----------- |
| plate | 123123 |             |



### 3. 查询车辆信息



***Endpoint:***

```bash
Method: POST
Type: URLENCODED
URL: http://localhost:3001/queryCar
```


***Headers:***

| Key           | Value                                                        | Description |
| ------------- | ------------------------------------------------------------ | ----------- |
| Authorization | Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiIwMDAwMDAwMDE2IiwibmFtZSI6Im93bmVyIiwicmlnaHRzIjoib3duZXIiLCJpYXQiOjE2NjQxNzQxMzksImV4cCI6MTY2NDM0NjkzOX0.s1O7gPMBYnpC7sZCh09nD5QOWd190N8GkX-ZQ6OLV1A |             |



***Body:***



## 费用操作



### 1. 缴费



***Endpoint:***

```bash
Method: POST
Type: URLENCODED
URL: http://localhost:3001/payForManage
```


***Headers:***

| Key           | Value                                                        | Description |
| ------------- | ------------------------------------------------------------ | ----------- |
| Authorization | Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiIwMDAwMDAwMDE2IiwibmFtZSI6Im93bmVyIiwicmlnaHRzIjoib3duZXIiLCJpYXQiOjE2Njc4MDEwMjYsImV4cCI6MTY2Nzk3MzgyNn0.B6N66Yr_xnWbt_eMdBydZnN6gnRpvEEsZFeSb7kJj6k |             |



***Body:***


| Key    | Value | Description           |
| ------ | ----- | --------------------- |
| mounth | 3     | 续费物业费月份int类型 |



### 2. 查询个人消费信息



***Endpoint:***

```bash
Method: POST
Type: 
URL: http://localhost:3001/queryRecord
```


***Headers:***

| Key           | Value                                                        | Description |
| ------------- | ------------------------------------------------------------ | ----------- |
| Authorization | Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiIwMDAwMDAwMDE2IiwibmFtZSI6Im93bmVyIiwicmlnaHRzIjoib3duZXIiLCJpYXQiOjE2Njc4MDEwMjYsImV4cCI6MTY2Nzk3MzgyNn0.B6N66Yr_xnWbt_eMdBydZnN6gnRpvEEsZFeSb7kJj6k |             |



### 3. 查询所有记录信息



***Endpoint:***

```bash
Method: POST
Type: 
URL: http://localhost:3001/queryAllRecords
```


***Headers:***

| Key           | Value                                                        | Description |
| ------------- | ------------------------------------------------------------ | ----------- |
| Authorization | Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiIwMDAwMDAwMDE3IiwibmFtZSI6ImFkbWluIiwicmlnaHRzIjoiYWRtaW4iLCJpYXQiOjE2Njc4MDUwMDIsImV4cCI6MTY2Nzk3NzgwMn0.S9kKosYz-CNhy5Y96ivaNVLo5JvMvDul-msZxC1V-gs |             |



---

[Back to top](#)

>Generated at 2022-11-07 15:22:03 by [docgen](https://github.com/thedevsaddam/docgen)

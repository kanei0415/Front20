use koreasteel;
/*진행중인 주문 갯수*/
select count(*) from ProduceOrder where Status='진행';
/*진행완료인 주문 갯수*/
select count(*) from ProduceOrder where Status='완료';

/*총 지시량*/
select count(*) from ProduceOrder;
/*총 실적량 출력*/
select count(*) from ProduceOrder where Status='완료';

/*특정 기간 사이의 총 지시량*/
select count(*) from ProduceOrder 
where WillComplete between '2020-01-01' and '2020-01-07';
/*특정 기간 사이의 총 실적량*/
select count(*) from ProduceOrder 
where WillComplete between '2020-01-01' and '2020-01-07' and Status='완료';

/*1압연 공장의 원형철근 총 지시량*/
select count(*) from ProduceOrder where ProcessLine = '1압연';
/*2압연 공장의 원형철근 총 지시량*/
select count(*) from ProduceOrder where ProcessLine = '2압연';

/*1압연 공장의 원형철근 완료 비율*/
select count(*) from ProduceOrder where ProcessLine = '1압연' and ItemName ='원형 철근';
select count(*) from ProduceOrder where ProcessLine = '1압연' and ItemName ='원형 철근' and Status='완료';
/*2압연 공장의 원형철근 완료 비율*/
select count(*) from ProduceOrder where ProcessLine = '2압연' and ItemName ='원형 철근';
select count(*) from ProduceOrder where ProcessLine = '2압연' and ItemName ='원형 철근' and Status='완료';
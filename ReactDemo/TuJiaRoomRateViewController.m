//
//  TuJiaRoomRateViewController.m
//  ReactDemo
//
//  Created by dong on 16/9/7.
//  Copyright © 2016年 dong. All rights reserved.
//
#import "AppDelegate.h"

#import "TuJiaRoomRateViewController.h"
#import <RCTRootView.h>
@interface TuJiaRoomRateViewController ()

@end

@implementation TuJiaRoomRateViewController

- (void)viewDidLoad {

    NSMutableDictionary *dataDict = [NSMutableDictionary dictionary];
//    [dataDict setObject:@"rateHeadData" forKey:@{@"totalFee":@"123",@"houseName":@"这是大猫的房子",@"roomCount":@"10"}];
    //    @property(nonatomic,retain)NSString *priceDate;
    //    @property(nonatomic,retain)NSString *priceWeekend;
    //    @property(nonatomic,retain)NSString *priceAmount;
    //    @property (nonatomic,assign)NSInteger roomCount;
    [dataDict setObject:@[@{@"totalFee":@"123",@"houseName":@"这是大猫的房子",@"roomCount":@"10"},@{@"priceDate":@"2014-15-11",@"priceWeekend":@"周日",@"priceAmount":@"399",@"roomCount":@"185"},@{@"priceDate":@"2014-15-11",@"priceWeekend":@"周日",@"priceAmount":@"399",@"roomCount":@"185"},@{@"priceDate":@"2014-15-11",@"priceWeekend":@"周日",@"priceAmount":@"399",@"roomCount":@"185"},@{@"priceDate":@"2014-15-11",@"priceWeekend":@"周日",@"priceAmount":@"399",@"roomCount":@"185"}]forKey:@"rateListArray" ];
    
    //传入 数据
    NSURL *jsCodeLocation = [NSURL
                             URLWithString:@"http://10.2.52.143:8081/index.ios.bundle?platform=ios&dev=true"];

    RCTRootView  *rootView_=
    [[RCTRootView alloc]initWithBundleURL:jsCodeLocation moduleName:@"TuJiaRoomRate" initialProperties:dataDict launchOptions:nil];
    
    self.view = rootView_;
 
    

}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

/*
#pragma mark - Navigation

// In a storyboard-based application, you will often want to do a little preparation before navigation
- (void)prepareForSegue:(UIStoryboardSegue *)segue sender:(id)sender {
    // Get the new view controller using [segue destinationViewController].
    // Pass the selected object to the new view controller.
}
*/

@end

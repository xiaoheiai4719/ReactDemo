//
//  DetailViewController.m
//  ReactDemo
//
//  Created by dong on 16/9/1.
//  Copyright © 2016年 dong. All rights reserved.
//

#import "DetailViewController.h"
#import <RCTRootView.h>
#import <RCTRootViewDelegate.h>
@interface DetailViewController ()<RCTRootViewDelegate>{
    RCTRootView *rootView_;

}

@end

@implementation DetailViewController

#pragma mark - Managing the detail item

- (void)setDetailItem:(id)newDetailItem {
    if (_detailItem != newDetailItem) {
        _detailItem = newDetailItem;
            
        // Update the view.
        [self configureView];
    }
}

- (void)configureView {
    // Update the user interface for the detail item.
    if (self.detailItem) {
        self.detailDescriptionLabel.text = [self.detailItem description];
    }
}

- (void)viewDidLoad {
    [super viewDidLoad];
//    // Do any additional setup after loading the view, typically from a nib.
//    [self configureView];
    
    NSURL *jsCodeLocation = [NSURL
                             URLWithString:@"http://10.2.52.143:8081/index.ios.bundle?platform=ios&dev=true"];
   rootView_=
    [[RCTRootView alloc] initWithBundleURL : jsCodeLocation
                         moduleName        : @"ReactDemo"
                         initialProperties :nil
                          launchOptions    : nil];
    rootView_.delegate = self;
    rootView_.sizeFlexibility = RCTRootViewSizeFlexibilityHeight;

    rootView_.frame = CGRectMake(0, 64, 320, 568);
    [self.view  addSubview:rootView_];
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}
- (void)rootViewDidChangeIntrinsicSize:(RCTRootView *)rootView{
    CGRect newFrame = rootView.frame;
    newFrame.size = rootView.intrinsicSize;
    
    rootView.frame = newFrame;
    
    
}


@end

//
//  DetailViewController.m
//  ReactDemo
//
//  Created by dong on 16/9/1.
//  Copyright © 2016年 dong. All rights reserved.
//

#import "DetailViewController.h"
#import <RCTRootView.h>
@interface DetailViewController ()

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
                             URLWithString:@"http://10.2.52.140:8081/index.ios.bundle?platform=ios&dev=true"];
    RCTRootView *rootView =
    [[RCTRootView alloc] initWithBundleURL : jsCodeLocation
                         moduleName        : @"ReactDemo"
                         initialProperties :nil
                          launchOptions    : nil];
    rootView.frame = CGRectMake(0, 0, 320, 568);
    [self.view addSubview: rootView];
    
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

@end

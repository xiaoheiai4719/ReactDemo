//
//  AppDelegate.h
//  ReactDemo
//
//  Created by dong on 16/9/1.
//  Copyright © 2016年 dong. All rights reserved.
//

#import <UIKit/UIKit.h>
@class RCTBridge;
@interface AppDelegate : UIResponder <UIApplicationDelegate>

@property (strong, nonatomic) UIWindow *window;

@property (nonatomic,readonly) RCTBridge *bridge;

@end


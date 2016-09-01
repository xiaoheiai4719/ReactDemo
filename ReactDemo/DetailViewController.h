//
//  DetailViewController.h
//  ReactDemo
//
//  Created by dong on 16/9/1.
//  Copyright © 2016年 dong. All rights reserved.
//

#import <UIKit/UIKit.h>

@interface DetailViewController : UIViewController

@property (strong, nonatomic) id detailItem;
@property (weak, nonatomic) IBOutlet UILabel *detailDescriptionLabel;

@end


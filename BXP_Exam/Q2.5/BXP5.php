<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>BXP SOFTWARE</title>
    </head>

    <body>
        <h1>FULL STACK DEVELOPER EXAM</h1>
        <script src="BXPq1.js"></script>
		
		<?php 
		
		//installation
		composer require phpab/phpab
			
		//participation and storage
			
		$storage = new \PhpAb\Storage\Cookie('phpab');
        $participationManager = new \PhpAb\Participation\Manager($storage);
		
		//Analytics Collecting
		$analyticsData = new \PhpAb\Analytics\Google\DataCollector();
		
		//event dispatcher
		$dispatcher = new \PhpAb\Event\Dispatcher();
        $dispatcher->addSubscriber($analyticsData); 
		
		//Search engine
		$filter1 = new \PhpAb\Participation\PercentageFilter(50);
		$filter2 = new \PhpAb\Participation\PercentageFilter(25);
		$filter3 = new \PhpAb\Participation\PercentageFilter(25);
		
        $chooser = new \PhpAb\Variant\RandomChooser();
        $engine = new PhpAb\Engine\Engine($participationManager, $dispatcher, $filter1, $filter2, $filter3, $chooser);
		
		//add test
		$test = new \PhpAb\Test\Test('bxp_test');
        $test->addVariant(new \PhpAb\Variant\SimpleVariant('bxp_control'));
        $test->addVariant(new \PhpAb\Variant\CallbackVariant('Design 1', function () {
            echo 'Design 1';
        }));
        $test->addVariant(new \PhpAb\Variant\CallbackVariant('Design 2', function () {
            echo 'Design 2';
        }));
        $test->addVariant(new \PhpAb\Variant\CallbackVariant('Design 3', function () {
            echo 'Design 3';
        }));

        $engine->addTest($test);
		
		//start engine and rendering google analytics script
		$engine->start();
		$analytics = new \PhpAb\Analytics\Renderer\GoogleUniversalAnalytics($analyticsData->getTestsData());
        echo $analytics->getScript();
		
		?>
    </body>
</html>
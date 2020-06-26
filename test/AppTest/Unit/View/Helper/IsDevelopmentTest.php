<?php

declare(strict_types=1);

namespace AppTest\Unit\View\Helper;

use App\View\Helper\IsDevelopment;
use PHPUnit\Framework\TestCase;

class IsDevelopmentTest extends TestCase
{
    public function provideConfig(): array
    {
        return [
            'non empty falsy debug config' => [['debug' => false]],
            'empty config'                 => [[]],
        ];
    }

    /**
     * @dataProvider provideConfig
     */
    public function testIsNotDevelopment(array $config)
    {
        $helper = new IsDevelopment($config);
        $this->assertFalse($helper());
    }

    public function testIsDevelopment()
    {
        $helper = new IsDevelopment(['debug' => true]);
        $this->assertTrue($helper());
    }
}

<?php

declare(strict_types=1);

namespace App;

use App\Handler\AboutPageHandler;
use App\Handler\ContactPageHandler;
use App\Handler\HomePageHandler;
use App\Handler\HomePageHandlerFactory;
use App\Handler\PingHandler;
use App\Middleware\NotFoundMiddleware;
use App\Middleware\XMLHttpRequestTemplateMiddleware;
use App\View\Helper\IsDevelopment;
use Laminas\ServiceManager\AbstractFactory\ReflectionBasedAbstractFactory;

/**
 * The configuration provider for the App module
 *
 * @see https://docs.laminas.dev/laminas-component-installer/
 */
class ConfigProvider
{
    /**
     * Returns the configuration array
     *
     * To add a bit of a structure, each section is defined in a separate
     * method which returns an array with its configuration.
     */
    public function __invoke(): array
    {
        return [
            'dependencies' => $this->getDependencies(),
            'templates'    => $this->getTemplates(),
            'view_helpers' => [
                'aliases'   => [
                    'isDevelopment' => IsDevelopment::class,
                ],
                'factories' => [
                    IsDevelopment::class => ReflectionBasedAbstractFactory::class,
                ],
            ],
        ];
    }

    /**
     * Returns the container dependencies
     */
    public function getDependencies(): array
    {
        return [
            'invokables' => [
                PingHandler::class => PingHandler::class,
            ],
            'factories'  => [
                HomePageHandler::class                  => HomePageHandlerFactory::class,
                AboutPageHandler::class                 => ReflectionBasedAbstractFactory::class,
                ContactPageHandler::class               => ReflectionBasedAbstractFactory::class,
                XMLHttpRequestTemplateMiddleware::class => ReflectionBasedAbstractFactory::class,
                NotFoundMiddleware::class               => ReflectionBasedAbstractFactory::class,
            ],
        ];
    }

    /**
     * Returns the templates configuration
     */
    public function getTemplates(): array
    {
        return [
            'paths' => [
                'app'    => [__DIR__ . '/../templates/app'],
                'error'  => [__DIR__ . '/../templates/error'],
                'layout' => [__DIR__ . '/../templates/layout'],
            ],
        ];
    }
}

<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* parts/head.tmpl */
class __TwigTemplate_304bd2445500ff9e691c9e6884c66344b71f687fbdc01eb8716cfd748937fea7 extends \Twig\Template
{
    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = [
        ];
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        // line 1
        echo "<head>
    <meta charset=\"utf-8\" />
    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0\" />
    <meta name=\"mobile-web-app-capable\" content=\"yes\">
\t<meta name=\"apple-mobile-web-app-title\" content=\"mfc.click\" />
    <meta name=\"apple-mobile-web-app-capable\" content=\"yes\" />
    <meta name=\"author\" content=\"NikitaShal, Sagleft\" />
    <meta name=\"keywords\" content=\"Telegram, Freedom, mfc.click\" />
    <meta name=\"description\" content=\"Рабочая телеграм ссылка\" />
    <meta name=\"msapplication-TileColor\" content=\"#1e96c8\" />
    <meta name=\"theme-color\" content=\"#1e96c8\" />
\t
    <link rel=\"apple-touch-icon\" sizes=\"180x180\" href=\"/img/apple-touch-icon.png\" />
    <link rel=\"icon\" type=\"image/png\" sizes=\"32x32\" href=\"/img/favicon-32x32.png\" />
    <link rel=\"icon\" type=\"image/png\" sizes=\"16x16\" href=\"/img/favicon-16x16.png\" />
    <link rel=\"manifest\" href=\"/site.webmanifest\" />
    <link rel=\"mask-icon\" href=\"/img/safari-pinned-tab.svg\" color=\"#1e96c8\" />
\t<link rel=\"stylesheet\" type=\"text/css\" href=\"/css/main.css?v=";
        // line 18
        echo twig_escape_filter($this->env, (isset($context["version"]) ? $context["version"] : null), "html", null, true);
        echo "\" />
\t
\t";
        // line 20
        if (($this->getAttribute((isset($context["page"]) ? $context["page"] : null), "tag", []) == "index")) {
            // line 21
            echo "\t\t<script type=\"text/javascript\" src=\"/js/listeners.js?v=";
            echo twig_escape_filter($this->env, (isset($context["version"]) ? $context["version"] : null), "html", null, true);
            echo "\"></script>
\t";
        } elseif (($this->getAttribute(        // line 22
(isset($context["page"]) ? $context["page"] : null), "tag", []) == "404")) {
            // line 23
            echo "\t\t<script type=\"text/javascript\" src=\"/js/jquery.min.js\"></script>
\t\t<script type=\"text/javascript\" src=\"/js/redirect404.js?v=";
            // line 24
            echo twig_escape_filter($this->env, (isset($context["version"]) ? $context["version"] : null), "html", null, true);
            echo "\"></script>
\t";
        }
        // line 26
        echo "    
    <title>";
        // line 27
        echo twig_escape_filter($this->env, $this->getAttribute((isset($context["page"]) ? $context["page"] : null), "title", []), "html", null, true);
        echo "</title>
</head>";
    }

    public function getTemplateName()
    {
        return "parts/head.tmpl";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  74 => 27,  71 => 26,  66 => 24,  63 => 23,  61 => 22,  56 => 21,  54 => 20,  49 => 18,  30 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Source("", "parts/head.tmpl", "D:\\Open_server\\OSPanel\\domains\\TelegramRedirect\\template\\parts\\head.tmpl");
    }
}

<?php foreach($catData as $item): ?>
    <div class="well">
        <h1><?= $item->title; ?></h1>
        <a href="<?= $item->detailLink; ?>">View</a>
    </div>
<?php endforeach; ?>